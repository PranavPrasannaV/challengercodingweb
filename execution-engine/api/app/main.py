import hashlib
import json
import logging
import os

from fastapi import Depends, FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from shared.aws import get_queue_url_for_language, get_sqs_client
from shared.db import session_scope
from shared.models import Exercise, Lesson, LessonBlock, Run
from sqlalchemy import desc

from app.ratelimit import enforce_run_rate_limit
from app.schemas import (
    ExerciseOut,
    ExerciseRefBlockContent,
    ImageBlockContent,
    LessonBlockOut,
    LessonOut,
    LessonSummary,
    ProseBlockContent,
    QuizBlockContent,
    RunCreate,
    RunCreateOut,
    RunOut,
    RunSummary,
)

logger = logging.getLogger("api")

app = FastAPI(title="Code Execution Engine API")

# MVP default is wide open; set ALLOWED_ORIGINS (comma-separated) to the
# real frontend origin(s) — e.g. https://challengercoding.org plus Vercel
# preview URLs — before this serves real traffic.
_allowed_origins = os.environ.get("ALLOWED_ORIGINS")
app.add_middleware(
    CORSMiddleware,
    allow_origins=_allowed_origins.split(",") if _allowed_origins else ["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

VALID_LANGUAGES = {"python", "java"}

BLOCK_CONTENT_MODELS = {
    "prose": ProseBlockContent,
    "quiz": QuizBlockContent,
    "image": ImageBlockContent,
    # "exercise_ref" is handled separately in _resolve_block — its stored
    # content is just {"exercise_id": ...} and gets resolved against the
    # exercises table, not parsed directly into ExerciseRefBlockContent.
}


@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/exercises/{exercise_id}", response_model=ExerciseOut)
def get_exercise(exercise_id: str):
    with session_scope() as session:
        exercise = session.get(Exercise, exercise_id)
        if exercise is None:
            raise HTTPException(status_code=404, detail="exercise not found")

        return ExerciseOut(
            id=exercise.id,
            title=exercise.title,
            description=exercise.description,
            kind=exercise.kind,
            language=exercise.language,
            starter_code=exercise.starter_code,
            # `template` and the hidden answer key never leave the server.
            expected_output=exercise.expected_output if exercise.reveal_expected else None,
        )


@app.post("/run", response_model=RunCreateOut, dependencies=[Depends(enforce_run_rate_limit)])
def create_run(body: RunCreate):
    if body.language not in VALID_LANGUAGES:
        raise HTTPException(status_code=400, detail=f"unsupported language: {body.language}")

    with session_scope() as session:
        if body.exercise_id is not None:
            exercise = session.get(Exercise, body.exercise_id)
            if exercise is None:
                raise HTTPException(status_code=404, detail="exercise not found")

        run = Run(
            exercise_id=body.exercise_id,
            user_id=body.user_id,
            language=body.language,
            code=body.code,
            status="pending",
        )
        session.add(run)
        session.flush()  # populate run.id before we use it below
        run_id = run.id

    sqs = get_sqs_client()
    queue_url = get_queue_url_for_language(sqs, body.language)
    sqs.send_message(
        QueueUrl=queue_url,
        MessageBody=json.dumps(
            {"run_id": run_id, "exercise_id": body.exercise_id, "language": body.language}
        ),
    )

    return RunCreateOut(run_id=run_id)


def _run_to_dict(run: Run) -> dict:
    return {
        "id": run.id,
        "exercise_id": run.exercise_id,
        "user_id": run.user_id,
        "language": run.language,
        "status": run.status,
        "stdout": run.stdout,
        "stderr": run.stderr,
        "exit_code": run.exit_code,
        "passed": run.passed,
        "runtime_ms": run.runtime_ms,
        "created_at": run.created_at.isoformat() if run.created_at else None,
    }


@app.get("/check/{run_id}", response_model=RunOut)
def check_run(run_id: str):
    with session_scope() as session:
        run = session.get(Run, run_id)
        if run is None:
            raise HTTPException(status_code=404, detail="run not found")
        return _run_to_dict(run)


@app.get("/runs", response_model=list[RunSummary])
def list_runs(limit: int = Query(default=20, le=100)):
    with session_scope() as session:
        rows = session.query(Run).order_by(desc(Run.created_at)).limit(limit).all()
        return [_run_to_dict(r) for r in rows]


def _resolve_block(session, block: LessonBlock) -> LessonBlockOut:
    if block.block_type != "exercise_ref":
        model = BLOCK_CONTENT_MODELS[block.block_type]
        return LessonBlockOut(
            id=block.id,
            position=block.position,
            block_type=block.block_type,
            version=block.version,
            content=model(**block.content),
        )

    exercise_id = block.content["exercise_id"]
    exercise = session.get(Exercise, exercise_id)
    if exercise is None:
        # A backfill bug or a since-deleted exercise — surface it loudly
        # rather than silently dropping the step from the lesson.
        raise HTTPException(
            status_code=500,
            detail=f"lesson block {block.id} references missing exercise {exercise_id}",
        )
    return LessonBlockOut(
        id=block.id,
        position=block.position,
        block_type="exercise_ref",
        version=block.version,
        content=ExerciseRefBlockContent(
            exercise_id=exercise.id,
            title=exercise.title,
            language=exercise.language,
            starter_code=exercise.starter_code,
            # Same hiding rule as GET /exercises/{id}: template never leaves
            # the server, expected_output only when explicitly revealed.
            expected_output=exercise.expected_output if exercise.reveal_expected else None,
        ),
    )


@app.get("/lessons", response_model=list[LessonSummary])
def list_lessons():
    with session_scope() as session:
        rows = (
            session.query(Lesson)
            .order_by(Lesson.track, Lesson.order_index)
            .all()
        )
        # Built explicitly (not returned as bare ORM rows) because the
        # session closes as soon as this `with` block exits — response_model
        # serialization happens after that, and would hit a detached
        # instance trying to lazy-load attributes.
        return [
            LessonSummary(
                id=r.id,
                slug=r.slug,
                title=r.title,
                track=r.track,
                order_index=r.order_index,
            )
            for r in rows
        ]


@app.get("/lessons/{slug}", response_model=LessonOut)
def get_lesson(slug: str):
    with session_scope() as session:
        lesson = session.query(Lesson).filter(Lesson.slug == slug).first()
        if lesson is None:
            raise HTTPException(status_code=404, detail="lesson not found")

        blocks = [_resolve_block(session, b) for b in lesson.blocks]
        return LessonOut(
            id=lesson.id,
            slug=lesson.slug,
            title=lesson.title,
            track=lesson.track,
            order_index=lesson.order_index,
            current_version=lesson.current_version,
            blocks=blocks,
        )


# GET /leaderboard/{competition_id} intentionally omitted from this MVP — it's
# optional per the spec and depends on Redis, which isn't wired up here.
# TODO: add a Redis sorted-set leaderboard if/when competitions are needed.

# Serve the dev-cell HTML at /cell so it runs over HTTP (not file://) and
# avoids the null-origin CORS issue browsers impose on file:// fetches.
app.mount("/static", StaticFiles(directory="/srv/frontend"), name="static")

@app.get("/cell", include_in_schema=False)
def dev_cell():
    return FileResponse("/srv/frontend/index.html")
