output "run_queue_urls" {
  value = { for k, q in aws_sqs_queue.run_queue : k => q.url }
}

output "dlq_urls" {
  value = { for k, q in aws_sqs_queue.dlq : k => q.url }
}

output "lambda_function_names" {
  value = { for k, f in aws_lambda_function.runner : k => f.function_name }
}

output "ecr_repository_urls" {
  value = {
    python = aws_ecr_repository.python_runner.repository_url
    java   = aws_ecr_repository.java_runner.repository_url
    api    = aws_ecr_repository.api.repository_url
  }
}

output "api_url" {
  value = aws_apigatewayv2_stage.default.invoke_url
}
