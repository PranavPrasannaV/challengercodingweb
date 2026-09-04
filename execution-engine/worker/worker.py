"""
Long-running SQS poll loop with a warm container pool per language.

For each message:
  1. Mark the run "running".
  2. Assemble the source (inject student code into the exercise template, if any).
  3. Write the assembled source to a temp file on this worker's filesystem.
  4. Hand it to the pool runner: docker exec into a pre-warmed container,
     capture stdout/stderr/exit/wall-time, clean up.
  5. Grade (if the exercise has an expected_output) and write the result row.
  6. Delete the SQS message only once the row is durably written.

Idempotent on run_id: every step overwrites the same `runs` row, so an
at-least-once SQS redelivery (worker crash, network blip) safely reprocesses
instead of duplicating results.

Pool startup happens once before the poll loop begins; pool shutdown happens
on clean exit.  Container recycling and respawning run inside pool.release().
"""
import json
import logging
import os
import tempfile

from shared.aws import get_queue_url, get_sqs_client
from shared.db import session_scope
from shared.models import Exercise, Run

from assembly import build_job
from docker_runner import run_job
from grading import compare_output
from pool import ContainerPool, POOL_SIZE, MAX_USES

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger("worker")

ENVELOPE_TO_RUN_STATUS = {"ok": "done", "error": "error", "timeout": "timeout"}

LANGUAGES = ["python", "java"]


def process_message(run_id: str, pools: dict[str, ContainerPool]) -> None:
    with session_scope() as session:
        run = session.get(Run, run_id)
        if run is None:
            logger.warning("run %s not found — dropping", run_id)
            return
        run.status = "running"
        language = run.language
        code = run.code
        exercise = session.get(Exercise, run.exercise_id) if run.exercise_id else None
        template = exercise.template if exercise else None
        kind = exercise.kind if exercise else "free_run"

    job = build_job(language, template, code, kind)

    # Write the assembled source to a temp file so docker cp can read it.
    with tempfile.NamedTemporaryFile(
        suffix=f"_{job.filename}", delete=False
    ) as f:
        f.write(job.source.encode())
        src_path = f.name

    try:
        result = run_job(
            pool=pools[language],
            language=language,
            src_path=src_path,
            filename=job.filename,
            entry=job.entry,
        )
    finally:
        os.unlink(src_path)

    passed = None
    with session_scope() as session:
        run = session.get(Run, run_id)
        exercise = session.get(Exercise, run.exercise_id) if run.exercise_id else None
        if exercise is not None and exercise.expected_output is not None:
            passed = compare_output(result["stdout"], exercise.expected_output, exercise.match_mode)

        run.status = ENVELOPE_TO_RUN_STATUS[result["status"]]
        run.stdout = result["stdout"]
        run.stderr = result["stderr"]
        run.exit_code = result["exit_code"]
        run.runtime_ms = result["runtime_ms"]
        run.passed = passed

    logger.info(
        "run %s finished: status=%s passed=%s runtime_ms=%s",
        run_id, result["status"], passed, result["runtime_ms"],
    )


def main() -> None:
    logger.info(
        "starting pools: %d container(s) per language, recycle after %d uses",
        POOL_SIZE, MAX_USES,
    )
    pools: dict[str, ContainerPool] = {}
    for lang in LANGUAGES:
        p = ContainerPool(lang)
        p.start()
        pools[lang] = p

    sqs = get_sqs_client()
    queue_url = get_queue_url(sqs)
    logger.info("worker polling %s", queue_url)

    try:
        while True:
            resp = sqs.receive_message(
                QueueUrl=queue_url,
                MaxNumberOfMessages=5,
                WaitTimeSeconds=20,
            )
            for message in resp.get("Messages", []):
                body = json.loads(message["Body"])
                run_id = body["run_id"]
                try:
                    process_message(run_id, pools)
                    sqs.delete_message(
                        QueueUrl=queue_url,
                        ReceiptHandle=message["ReceiptHandle"],
                    )
                except Exception:
                    # Don't delete — let the visibility timeout expire so SQS
                    # redelivers (up to maxReceiveCount before it hits the DLQ).
                    logger.exception(
                        "failed to process run %s — leaving for redelivery", run_id
                    )
    finally:
        logger.info("shutting down pools")
        for p in pools.values():
            p.shutdown()


if __name__ == "__main__":
    main()
