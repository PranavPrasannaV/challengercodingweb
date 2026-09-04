# One repo per language image. Build & push before `terraform apply` (or wire
# into CI) — Terraform doesn't build images, it only points Lambda at a tag:
#
#   aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account>.dkr.ecr.<region>.amazonaws.com
#   docker build -f runners/python/Dockerfile.lambda -t <repo_url_python>:latest ..  (context: execution-engine/)
#   docker push <repo_url_python>:latest
#   (same for runners/java/Dockerfile.lambda)

resource "aws_ecr_repository" "python_runner" {
  name                 = "${var.project}-python-lambda"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

resource "aws_ecr_repository" "java_runner" {
  name                 = "${var.project}-java-lambda"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

resource "aws_ecr_repository" "api" {
  name                 = "${var.project}-api"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

resource "aws_ecr_lifecycle_policy" "api" {
  repository = aws_ecr_repository.api.name
  policy     = jsonencode({
    rules = [{
      rulePriority = 1
      description  = "keep last 5 images"
      selection    = { tagStatus = "any", countType = "imageCountMoreThan", countNumber = 5 }
      action       = { type = "expire" }
    }]
  })
}

# Keep only recent images so ECR storage (~$0.10/GB-month, no free tier)
# doesn't quietly grow forever across redeploys.
resource "aws_ecr_lifecycle_policy" "python_runner" {
  repository = aws_ecr_repository.python_runner.name
  policy     = jsonencode({
    rules = [{
      rulePriority = 1
      description  = "keep last 5 images"
      selection    = { tagStatus = "any", countType = "imageCountMoreThan", countNumber = 5 }
      action       = { type = "expire" }
    }]
  })
}

resource "aws_ecr_lifecycle_policy" "java_runner" {
  repository = aws_ecr_repository.java_runner.name
  policy     = jsonencode({
    rules = [{
      rulePriority = 1
      description  = "keep last 5 images"
      selection    = { tagStatus = "any", countType = "imageCountMoreThan", countNumber = 5 }
      action       = { type = "expire" }
    }]
  })
}
