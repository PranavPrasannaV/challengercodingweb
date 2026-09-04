# One queue + DLQ per language (mirrors code-run-queue/code-run-dlq from
# local dev, split so each language's Lambda has its own event source
# mapping — see shared/aws.py's RUN_QUEUE_NAMES routing).

locals {
  languages = {
    python = { visibility_timeout = 60 }
    java   = { visibility_timeout = 60 } # > EXEC_TIMEOUT_SEC["java"] (10s) + overhead, same margin as local dev
  }
}

resource "aws_sqs_queue" "dlq" {
  for_each                  = local.languages
  name                      = "${var.project}-dlq-${each.key}"
  message_retention_seconds = 1209600 # 14 days — max time to notice/replay a DLQ'd run
}

resource "aws_sqs_queue" "run_queue" {
  for_each                   = local.languages
  name                       = "${var.project}-queue-${each.key}"
  visibility_timeout_seconds = each.value.visibility_timeout
  message_retention_seconds  = 345600 # 4 days

  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.dlq[each.key].arn
    maxReceiveCount      = 3
  })
}
