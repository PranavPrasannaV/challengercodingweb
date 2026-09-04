data "aws_iam_policy_document" "lambda_assume" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "runner" {
  for_each           = local.languages
  name               = "${var.project}-runner-${each.key}"
  assume_role_policy = data.aws_iam_policy_document.lambda_assume.json
}

# CloudWatch Logs — required for even basic logging to work.
resource "aws_iam_role_policy_attachment" "logs" {
  for_each   = local.languages
  role       = aws_iam_role.runner[each.key].name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

# The SQS event source mapping polls and deletes messages *using this role*,
# not a separately-invoked poller — these permissions are what let AWS's own
# infrastructure do that on the function's behalf.
data "aws_iam_policy_document" "sqs_consume" {
  for_each = local.languages
  statement {
    actions = [
      "sqs:ReceiveMessage",
      "sqs:DeleteMessage",
      "sqs:GetQueueAttributes",
    ]
    resources = [aws_sqs_queue.run_queue[each.key].arn]
  }
}

resource "aws_iam_role_policy" "sqs_consume" {
  for_each = local.languages
  name     = "${var.project}-sqs-consume-${each.key}"
  role     = aws_iam_role.runner[each.key].id
  policy   = data.aws_iam_policy_document.sqs_consume[each.key].json
}
