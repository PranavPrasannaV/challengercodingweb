.PHONY: up down build build-runners migrate seed logs build-lambda-images push-lambda-images tf-plan tf-apply

up:
	cd infra && docker-compose up --build

down:
	cd infra && docker-compose down -v

build:
	cd infra && docker-compose build

build-runners:
	cd infra && docker-compose --profile build-runners build

# `up` already runs this via depends_on before api/worker/seed start. Useful
# on its own after pulling new migrations without restarting the stack.
migrate:
	cd infra && docker-compose run --rm migrate

seed:
	cd infra && docker-compose run --rm seed

logs:
	cd infra && docker-compose logs -f

# --- Production (Lambda + SQS + Supabase) ---
# ECR_REGISTRY, e.g. 123456789012.dkr.ecr.us-east-1.amazonaws.com — get it
# from `terraform output ecr_repository_urls` after the first `tf-apply`
# (the repos must exist before an image can be pushed to them).
ECR_REGISTRY ?=
IMAGE_TAG ?= latest

# --provenance=false --sbom=false: without these, modern Docker Buildx wraps
# the image in an OCI image index carrying an extra "attestation manifest"
# entry, which Lambda's CreateFunction rejects outright
# ("image manifest ... is not supported"). These flags keep the push a plain
# single-platform image manifest, which Lambda accepts.
build-lambda-images:
	docker build --provenance=false --sbom=false -f runners/python/Dockerfile.lambda -t code-run-python-lambda:$(IMAGE_TAG) .
	docker build --provenance=false --sbom=false -f runners/java/Dockerfile.lambda -t code-run-java-lambda:$(IMAGE_TAG) .
	docker build --provenance=false --sbom=false -f api/Dockerfile.lambda -t code-run-api:$(IMAGE_TAG) .

push-lambda-images: build-lambda-images
	@test -n "$(ECR_REGISTRY)" || (echo "set ECR_REGISTRY=<account>.dkr.ecr.<region>.amazonaws.com" && exit 1)
	docker tag code-run-python-lambda:$(IMAGE_TAG) $(ECR_REGISTRY)/code-run-python-lambda:$(IMAGE_TAG)
	docker tag code-run-java-lambda:$(IMAGE_TAG) $(ECR_REGISTRY)/code-run-java-lambda:$(IMAGE_TAG)
	docker tag code-run-api:$(IMAGE_TAG) $(ECR_REGISTRY)/code-run-api:$(IMAGE_TAG)
	docker push $(ECR_REGISTRY)/code-run-python-lambda:$(IMAGE_TAG)
	docker push $(ECR_REGISTRY)/code-run-java-lambda:$(IMAGE_TAG)
	docker push $(ECR_REGISTRY)/code-run-api:$(IMAGE_TAG)

tf-plan:
	cd infra/terraform && terraform init && terraform plan

tf-apply:
	cd infra/terraform && terraform init && terraform apply
