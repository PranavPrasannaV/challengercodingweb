# The FastAPI app (api/app/main.py), unchanged, invoked via Mangum
# (api/app/lambda_handler.py) behind an API Gateway HTTP API — HTTP API
# (not REST API) because it's a straight Lambda-proxy integration and
# roughly 1/3 the per-request cost.

data "aws_iam_policy_document" "api_assume" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "api" {
  name               = "${var.project}-api"
  assume_role_policy = data.aws_iam_policy_document.api_assume.json
}

resource "aws_iam_role_policy_attachment" "api_logs" {
  role       = aws_iam_role.api.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

# create_run (api/app/main.py) needs to resolve each run queue's URL and
# enqueue to it — nothing more (it never receives/deletes messages itself).
data "aws_iam_policy_document" "api_sqs_send" {
  statement {
    actions = [
      "sqs:SendMessage",
      "sqs:GetQueueUrl",
    ]
    resources = [for q in aws_sqs_queue.run_queue : q.arn]
  }
}

resource "aws_iam_role_policy" "api_sqs_send" {
  name   = "${var.project}-api-sqs-send"
  role   = aws_iam_role.api.id
  policy = data.aws_iam_policy_document.api_sqs_send.json
}

resource "aws_lambda_function" "api" {
  function_name = "${var.project}-api"
  role          = aws_iam_role.api.arn
  package_type  = "Image"
  image_uri     = "${aws_ecr_repository.api.repository_url}:${var.api_image_tag}"

  memory_size   = 512
  timeout       = 15
  architectures = ["arm64"] # matches how the image is built — see lambda.tf
  # reserved_concurrent_executions omitted for now — see the comment in
  # lambda.tf on the account's current 10-execution concurrency ceiling.
  # reserved_concurrent_executions = var.api_reserved_concurrency

  environment {
    variables = {
      DATABASE_URL          = var.database_url
      DB_POOL_SIZE          = "1"
      RUN_QUEUE_NAME_PYTHON = aws_sqs_queue.run_queue["python"].name
      RUN_QUEUE_NAME_JAVA   = aws_sqs_queue.run_queue["java"].name
      ALLOWED_ORIGINS       = var.allowed_origins
    }
  }
}

resource "aws_cloudwatch_log_group" "api" {
  name              = "/aws/lambda/${aws_lambda_function.api.function_name}"
  retention_in_days = 14
}

resource "aws_apigatewayv2_api" "api" {
  name          = "${var.project}-api"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_integration" "api" {
  api_id                 = aws_apigatewayv2_api.api.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.api.invoke_arn
  payload_format_version = "2.0"
}

# Single catch-all route: FastAPI does its own routing internally via
# Mangum, so API Gateway just needs to forward everything to it.
resource "aws_apigatewayv2_route" "default" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "$default"
  target    = "integrations/${aws_apigatewayv2_integration.api.id}"
}

resource "aws_apigatewayv2_stage" "default" {
  api_id      = aws_apigatewayv2_api.api.id
  name        = "$default"
  auto_deploy = true
}

resource "aws_lambda_permission" "api_gateway" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.api.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.api.execution_arn}/*/*"
}
