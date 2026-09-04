# One function per language, each built from its own container image
# (runners/python/Dockerfile.lambda, runners/java/Dockerfile.lambda — see
# ecr.tf for the build/push steps). No shared warm pool: the Firecracker
# microVM per invocation is the sandbox (see lambda_runner/sandbox_exec.py).

resource "aws_lambda_function" "runner" {
  for_each      = local.languages
  function_name = "${var.project}-runner-${each.key}"
  role          = aws_iam_role.runner[each.key].arn
  package_type  = "Image"
  image_uri = each.key == "python" ? "${aws_ecr_repository.python_runner.repository_url}:${var.python_image_tag}" : "${aws_ecr_repository.java_runner.repository_url}:${var.java_image_tag}"

  # Java needs headroom for the JVM + javac; timeout leaves margin over
  # sandbox_exec.py's own EXEC_TIMEOUT_SEC so a hung process is always killed
  # by our code first, not by Lambda cutting the invocation off mid-cleanup.
  memory_size = each.key == "python" ? 512 : 1024
  timeout     = each.key == "python" ? 15 : 25

  # Images are built natively on arm64 (Apple Silicon dev machine) — arm64
  # Lambda (Graviton2) is also ~20% cheaper than x86_64, so there's no
  # reason to cross-build for x86_64 here.
  architectures = ["arm64"]

  # Reserved concurrency is commented out: new AWS accounts start with a
  # 10-total-concurrent-executions account limit (ours: confirmed via
  # `aws lambda get-account-settings`), and any reservation must leave 10
  # *unreserved* behind — so nothing can be reserved at all until AWS raises
  # the account quota (Service Quotas console, usually approved quickly).
  # Once that's raised, uncomment to bound cost/DB-connections again:
  # reserved_concurrent_executions = each.key == "python" ? var.python_reserved_concurrency : var.java_reserved_concurrency

  environment {
    variables = {
      LANGUAGE     = each.key
      DATABASE_URL = var.database_url
      DB_POOL_SIZE = "1"
    }
  }
}

resource "aws_cloudwatch_log_group" "runner" {
  for_each          = local.languages
  name              = "/aws/lambda/${aws_lambda_function.runner[each.key].function_name}"
  retention_in_days = 14 # CloudWatch Logs storage isn't in the always-free tier — cap it so logs don't accrue cost indefinitely
}

resource "aws_lambda_event_source_mapping" "run_queue" {
  for_each         = local.languages
  event_source_arn = aws_sqs_queue.run_queue[each.key].arn
  function_name    = aws_lambda_function.runner[each.key].arn
  batch_size       = 5

  # A bad record in a batch shouldn't block the good ones — only the failed
  # messageId (from handler.py's batchItemFailures) gets redelivered.
  function_response_types = ["ReportBatchItemFailures"]
}
