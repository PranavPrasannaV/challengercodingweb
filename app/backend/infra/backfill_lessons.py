"""
Reads a lessons-export.json (originally produced by app/frontend's now-deleted
scripts/export-lessons.mts, when lesson content still lived in ~40 static TS
files there) and writes Lesson / LessonBlock / Exercise / LessonExerciseRef
rows into Postgres. This module's backfill_lesson() is also imported
directly by infra/admin/compile_lesson.py — that's the ongoing way to
add/edit a lesson now that content lives only in the database; this file
stays as the shared write path both go through, and as a way to reload the
full lesson set from a JSON snapshot if ever needed.

DB writes happen only here, in Python — one process, one language, owns
writes to the shared schema (two backends touching one DB is the thing
being avoided).

Idempotent on lesson slug: re-running replaces a lesson's blocks (and the
exercises those exercise_ref blocks own) rather than duplicating them, so a
content update is "re-export, re-run" with no manual cleanup.

Usage:
    python infra/backfill_lessons.py path/to/lessons-export.json
"""
import hashlib
import json
import sys

from shared.db import session_scope
from shared.models import Exercise, Lesson, LessonBlock, LessonExerciseRef


def _hash(content: dict) -> str:
    return hashlib.sha256(json.dumps(content, sort_keys=True).encode()).hexdigest()


def _delete_existing(session, lesson: Lesson) -> None:
    # Exercises are owned by their lesson's exercise_ref blocks in this
    # backfill (nothing else references them yet), so they're cleaned up
    # alongside the blocks that reference them. A hand-authored exercise
    # shared across lessons would need this to become reference-counted —
    # not a case that exists yet.
    exercise_ids = [
        row[0]
        for row in session.query(LessonExerciseRef.exercise_id)
        .filter(LessonExerciseRef.lesson_id == lesson.id)
        .all()
    ]
    session.query(LessonExerciseRef).filter(LessonExerciseRef.lesson_id == lesson.id).delete()
    session.query(LessonBlock).filter(LessonBlock.lesson_id == lesson.id).delete()
    if exercise_ids:
        session.query(Exercise).filter(Exercise.id.in_(exercise_ids)).delete(
            synchronize_session=False
        )


def backfill_lesson(session, entry: dict) -> None:
    lesson = session.query(Lesson).filter(Lesson.slug == entry["slug"]).first()
    if lesson is None:
        lesson = Lesson(
            slug=entry["slug"],
            title=entry["title"],
            track=entry["track"],
            order_index=entry["order_index"],
        )
        session.add(lesson)
        session.flush()
    else:
        lesson.title = entry["title"]
        lesson.track = entry["track"]
        lesson.order_index = entry["order_index"]
        lesson.current_version += 1
        _delete_existing(session, lesson)
        session.flush()

    for position, block in enumerate(entry["blocks"]):
        if block["block_type"] != "exercise_ref":
            content = block["content"]
            session.add(
                LessonBlock(
                    lesson_id=lesson.id,
                    position=position,
                    block_type=block["block_type"],
                    content=content,
                    content_hash=_hash(content),
                )
            )
            continue

        c = block["content"]
        exercise = Exercise(
            title=c["title"],
            kind=c["kind"],
            language=c["language"],
            starter_code=c["starter_code"],
            template=c["template"],
            expected_output=c["expected_output"],
            match_mode=c["match_mode"],
            reveal_expected=c["reveal_expected"],
        )
        session.add(exercise)
        session.flush()

        ref_content = {"exercise_id": exercise.id}
        lesson_block = LessonBlock(
            lesson_id=lesson.id,
            position=position,
            block_type="exercise_ref",
            content=ref_content,
            content_hash=_hash(ref_content),
        )
        session.add(lesson_block)
        session.flush()

        session.add(
            LessonExerciseRef(
                lesson_id=lesson.id,
                block_id=lesson_block.id,
                exercise_id=exercise.id,
            )
        )


def main() -> None:
    if len(sys.argv) != 2:
        print("usage: python infra/backfill_lessons.py path/to/lessons-export.json", file=sys.stderr)
        sys.exit(1)

    with open(sys.argv[1]) as f:
        data = json.load(f)

    with session_scope() as session:
        for entry in data["lessons"]:
            backfill_lesson(session, entry)

    print(f"backfilled {len(data['lessons'])} lessons")


if __name__ == "__main__":
    main()
