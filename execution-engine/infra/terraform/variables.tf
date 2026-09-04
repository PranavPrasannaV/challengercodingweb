variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "project" {
  description = "Prefix applied to every resource name."
  type        = string
  default     = "code-run"
}

variable "database_url" {
  description = <<-EOT
    SQLAlchemy DSN pointed at Supabase's connection *pooler* (transaction
    mode, usually port 6543), e.g.
    postgresql+psycopg2://postgres.xxxx:PASSWORD@aws-0-region.pooler.supabase.com:6543/postgres?sslmode=require
    Passed as a Lambda environment variable, which AWS encrypts at rest by
    default — that's adequate here; reach for Secrets Manager/SSM only if a
    compliance requirement demands rotation, since Secrets Manager itself
    costs $0.40/secret/month.
  EOT
  type        = string
  sensitive   = true
}

variable "python_image_tag" {
  description = "Tag to deploy from the code-run-python-lambda ECR repo (build+push via infra/terraform's null_resource or CI before applying)."
  type        = string
  default     = "latest"
}

variable "java_image_tag" {
  type    = string
  default = "latest"
}

variable "python_reserved_concurrency" {
  description = "Caps simultaneous Python executions — bounds both cost and concurrent DB connections against the Supabase pooler."
  type        = number
  default     = 5
}

variable "java_reserved_concurrency" {
  description = "Lower than Python's: JVM cold starts are slower and each concurrent execution eats more memory, so a smaller cap keeps a burst from adding up in cost."
  type        = number
  default     = 3
}

variable "api_image_tag" {
  description = "Tag to deploy from the code-run-api ECR repo (api/Dockerfile.lambda)."
  type        = string
  default     = "latest"
}

variable "api_reserved_concurrency" {
  type    = number
  default = 5
}

variable "allowed_origins" {
  description = "Comma-separated origins for the API's CORS middleware (see api/app/main.py). Leave empty to allow all (fine for early testing, tighten before real traffic)."
  type        = string
  default     = ""
}
