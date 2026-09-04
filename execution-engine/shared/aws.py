"""
Tiny wrapper around boto3 SQS so AWS_ENDPOINT_URL is the only knob that
differs between local dev (LocalStack) and a real AWS deployment.

Production runs one queue per language (each with its own Lambda event
source mapping — see infra/terraform/lambda.tf), so a run is routed to the
Lambda that actually has the right runtime installed rather than a shared
worker picking the pool by message content. Locally, RUN_QUEUE_NAME_PYTHON
and RUN_QUEUE_NAME_JAVA are left unset and both fall back to the single
RUN_QUEUE_NAME the docker-compose worker already polls, so local dev is
unaffected.
"""
import os

import boto3

RUN_QUEUE_NAME = os.environ.get("RUN_QUEUE_NAME", "code-run-queue")
DLQ_NAME = os.environ.get("RUN_DLQ_NAME", "code-run-dlq")

RUN_QUEUE_NAMES = {
    "python": os.environ.get("RUN_QUEUE_NAME_PYTHON", RUN_QUEUE_NAME),
    "java": os.environ.get("RUN_QUEUE_NAME_JAVA", RUN_QUEUE_NAME),
}


def get_sqs_client():
    endpoint_url = os.environ.get("AWS_ENDPOINT_URL")  # None => real AWS
    kwargs = {"endpoint_url": endpoint_url, "region_name": os.environ.get("AWS_REGION", "us-east-1")}
    if endpoint_url:
        # LocalStack doesn't check credentials, but boto3 still requires
        # *something* be set — "test"/"test" satisfies that locally.
        # Against real AWS, leave credentials unset so boto3 falls through to
        # its default chain (Lambda's execution role, in production) — a
        # hardcoded fallback here would silently override real IAM
        # credentials with a literal invalid "test" key/secret.
        kwargs["aws_access_key_id"] = os.environ.get("AWS_ACCESS_KEY_ID", "test")
        kwargs["aws_secret_access_key"] = os.environ.get("AWS_SECRET_ACCESS_KEY", "test")
    return boto3.client("sqs", **kwargs)


def get_queue_url(sqs, name: str = RUN_QUEUE_NAME) -> str:
    resp = sqs.get_queue_url(QueueName=name)
    return resp["QueueUrl"]


def get_queue_url_for_language(sqs, language: str) -> str:
    return get_queue_url(sqs, RUN_QUEUE_NAMES[language])
