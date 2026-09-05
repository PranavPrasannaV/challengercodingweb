#!/bin/sh
# Creates the run queue + its dead-letter queue against LocalStack.
# Idempotent: safe to re-run (aws sqs create-queue is a no-op if it exists).
set -eu

ENDPOINT="${AWS_ENDPOINT_URL:-http://localstack:4566}"
QUEUE_NAME="${RUN_QUEUE_NAME:-code-run-queue}"
DLQ_NAME="${RUN_DLQ_NAME:-code-run-dlq}"

echo "waiting for localstack at $ENDPOINT ..."
until aws --endpoint-url "$ENDPOINT" sqs list-queues >/dev/null 2>&1; do
  sleep 1
done

echo "creating DLQ: $DLQ_NAME"
aws --endpoint-url "$ENDPOINT" sqs create-queue --queue-name "$DLQ_NAME" >/tmp/dlq.json
DLQ_URL=$(aws --endpoint-url "$ENDPOINT" sqs get-queue-url --queue-name "$DLQ_NAME" --query 'QueueUrl' --output text)
DLQ_ARN=$(aws --endpoint-url "$ENDPOINT" sqs get-queue-attributes --queue-url "$DLQ_URL" --attribute-names QueueArn --query 'Attributes.QueueArn' --output text)

echo "creating queue: $QUEUE_NAME (redrive to $DLQ_NAME after 3 failed receives)"
REDRIVE_POLICY=$(printf '{"deadLetterTargetArn":"%s","maxReceiveCount":"3"}' "$DLQ_ARN")

aws --endpoint-url "$ENDPOINT" sqs create-queue \
  --queue-name "$QUEUE_NAME" \
  --attributes "{\"VisibilityTimeout\":\"60\",\"RedrivePolicy\":\"$(printf '%s' "$REDRIVE_POLICY" | sed 's/"/\\"/g')\"}"

echo "done."
