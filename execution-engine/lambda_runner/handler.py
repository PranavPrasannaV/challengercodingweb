"""
AWS Lambda handler for code execution, triggered by an SQS event source
mapping (one queue + one function image per language — see
api/app/main.py's per-language queue routing and infra/terraform/lambda.tf).

Replaces worker/worker.py + worker/pool.py + worker/docker_runner.py for
production: no poll loop (the event source mapping handles receiving and, on
success, deleting messages), no docker socket, no warm container pool — the
Lambda execution environment itself is the sandbox. Local dev
(docker-compose) keeps using the original docker-based worker unchanged.

Partial batch failure: an exception processing one record reports only that
record's messageId in batchItemFailures, so the rest of the batch still
commits and only the failed record is redelivered (up to the queue's
maxReceiveCount before it hits the DLQ) — same idempotent-on-run_id contract
as the docker worker.
"""
import json
import logging
import os

from assembly import build_job
from grading import compare_output
from sandbox_exec import run_job
from shared.db import session_scope
from shared.models import Exercise, Run

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger("lambda_runner")

# One language per function/image — set at deploy time (see Dockerfile.lambda
# and infra/terraform/lambda.tf), not read from the message body.
LANGUAGE = os.environ["LANGUAGE"]

ENVELOPE_TO_RUN_STATUS = {"ok": "done", "error": "error", "timeout": "timeout"}


def _process_one(run_id: str) -> None:
    with session_scope() as session:
        run = session.get(Run, run_id)
        if run is None:
            logger.warning("run %s not found — dropping", run_id)
            return
        run.status = "running"
        code = run.code
        exercise = session.get(Exercise, run.exercise_id) if run.exercise_id else None
        template = exercise.template if exercise else None
        kind = exercise.kind if exercise else "free_run"

    job = build_job(LANGUAGE, template, code, kind)
    result = run_job(language=LANGUAGE, source=job.source, filename=job.filename, entry=job.entry)

    with session_scope() as session:
        run = session.get(Run, run_id)
        exercise = session.get(Exercise, run.exercise_id) if run.exercise_id else None
        passed = None
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


def handler(event, context):
    failures = []
    for record in event.get("Records", []):
        body = json.loads(record["body"])
        run_id = body["run_id"]
        try:
            _process_one(run_id)
        except Exception:
            logger.exception("failed to process run %s — reporting for redelivery", run_id)
            failures.append({"itemIdentifier": record["messageId"]})
    return {"batchItemFailures": failures}
