"""
Admin content tool: compiles one YAML lesson file into lesson_blocks rows and
writes them via the same backfill_lesson() the bulk migration used — same
idempotent-by-slug upsert, same trust boundary (DATABASE_URL is the only
credential this checks; there's no separate admin auth layer, matching
infra/backfill_lessons.py).

This exists because lesson content used to be a hand-authored .ts file per
lesson; now that content lives in Postgres, an admin needs *something*
readable to author in — hand-writing the lesson_blocks JSON directly isn't
that. One YAML file per lesson, Markdown prose per step
(infra/admin/markdown_blocks.py), is.

Usage:
    # Validate only — prints the block count per step, writes nothing.
    python infra/admin/compile_lesson.py infra/admin/example_lesson.yaml

    # Validate, then upsert into Postgres.
    DATABASE_URL=postgresql+psycopg2://... \\
        python infra/admin/compile_lesson.py infra/admin/example_lesson.yaml --apply

See infra/admin/example_lesson.yaml for the file format and
infra/admin/README.md for the full authoring guide.
"""
import argparse
import re
import sys
from pathlib import Path

import yaml

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from infra.backfill_lessons import backfill_lesson  # noqa: E402
from infra.admin.markdown_blocks import markdown_to_blocks  # noqa: E402
from shared.db import session_scope  # noqa: E402

# Mirrors challengercoding-next/scripts/export-lessons.mts's
# exerciseShapeFor() — a Java starter that doesn't declare its own class is
# a bare snippet meant to run inside the engine's Main/main() shell; anything
# else (Python, or a full Java class) is submitted as-is. Kept in sync by
# hand since there are now two independent lesson-authoring paths (this tool
# and, historically, the deleted TS export) that both need it.
JAVA_FREE_RUN_TEMPLATE = (
    "public class Main {\n"
    "    public static void main(String[] args) throws Exception {\n"
    "{{code}}\n"
    "    }\n"
    "}\n"
)
_JAVA_CLASS_RE = re.compile(r"public\s+(?:final\s+|abstract\s+)?class\s+\w+")


def _language_for(track: str) -> str:
    return "java" if track.startswith("java") else "python"


def _exercise_shape(language: str, starter_code: str) -> tuple[str, str]:
    if language == "java" and not _JAVA_CLASS_RE.search(starter_code):
        return "free_run", JAVA_FREE_RUN_TEMPLATE
    return "write_class", "{{code}}"


def compile_lesson(doc: dict) -> dict:
    for field in ("slug", "title", "track", "order_index", "steps"):
        if field not in doc:
            raise ValueError(f'lesson file is missing required field "{field}"')

    language = _language_for(doc["track"])
    blocks: list[dict] = []

    for step in doc["steps"]:
        if "title" not in step:
            raise ValueError("every step needs a title")

        blocks.append({"block_type": "step", "content": {"title": step["title"]}})

        for block in markdown_to_blocks(step.get("body", "")):
            block_type = block.pop("type")
            blocks.append({"block_type": block_type, "content": block})

        exercise = step.get("exercise")
        if exercise:
            starter = exercise.get("starter_code", "")
            if not starter:
                raise ValueError(f'step "{step["title"]}": exercise has no starter_code')
            kind, template = _exercise_shape(language, starter)
            blocks.append(
                {
                    "block_type": "exercise_ref",
                    "content": {
                        "title": step["title"],
                        "language": language,
                        "kind": exercise.get("kind", kind),
                        "template": exercise.get("template", template),
                        "starter_code": starter,
                        "expected_output": exercise.get("expected_output"),
                        "match_mode": exercise.get("match_mode", "trimmed"),
                        # Every exercise this tool authors is shown openly in
                        # the UI ("Make it print `X`") — this isn't a new
                        # disclosure, just naming what's already true.
                        "reveal_expected": True,
                    },
                }
            )

        for quiz in step.get("quiz", []):
            options = quiz["options"]
            answer_idx = next((i for i, o in enumerate(options) if o["value"] == quiz["correct"]), None)
            if answer_idx is None:
                raise ValueError(f'step "{step["title"]}": quiz correct="{quiz["correct"]}" matches no option value')
            blocks.append(
                {
                    "block_type": "quiz",
                    "content": {
                        "question": quiz["question"],
                        "choices": [{"label": o["label"], "value": o["value"]} for o in options],
                        "answer_idx": answer_idx,
                    },
                }
            )

    return {
        "slug": doc["slug"],
        "title": doc["title"],
        "track": doc["track"],
        "order_index": doc["order_index"],
        "blocks": blocks,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("lesson_file", type=Path)
    parser.add_argument("--apply", action="store_true", help="write to Postgres (DATABASE_URL required); default is dry-run")
    args = parser.parse_args()

    doc = yaml.safe_load(args.lesson_file.read_text())
    entry = compile_lesson(doc)

    step_count = sum(1 for b in entry["blocks"] if b["block_type"] == "step")
    print(f"{entry['slug']}: {step_count} steps, {len(entry['blocks'])} blocks — compiled OK")

    if not args.apply:
        print("dry run — pass --apply to write this to Postgres")
        return

    with session_scope() as session:
        backfill_lesson(session, entry)
    print(f"wrote {entry['slug']} to the database")


if __name__ == "__main__":
    main()
