# Include the environment variables if .env file exists
ifneq (,$(wildcard ./.env))
    include .env
    export
endif

# Default values
TAG ?= latest
PLATFORM := linux/amd64
IMAGE := $(IMAGE)
CACHE_IMAGE := $(IMAGE):$(TAG)

# Enable Docker BuildKit
export DOCKER_BUILDKIT=1

# Target to build the Docker image
.PHONY: image
image:
	@echo "Building Docker image for $(PUBLIC_DOMAIN)"
	docker build \
		--platform=$(PLATFORM) \
		--cache-from=$(CACHE_IMAGE) \
		-t $(IMAGE):$(TAG) \
		--build-arg BUILD_DATE=$(shell date -u +'%Y-%m-%dT%H:%M:%SZ') \
		--build-arg VCS_REF=$(shell git rev-parse --short HEAD) \
		.

# Target to push the image to the registry
.PHONY: push
push:
	docker push $(IMAGE):$(TAG)

# Clean target to remove intermediate containers or images
.PHONY: clean
clean:
	@echo "Cleaning up dangling images and containers"
	docker system prune -f
	@echo "Cleanup complete"

# Target to run the container locally
.PHONY: run
run-local:
	docker compose up

# Target to run the container in production
.PHONY: deploy
deploy:
	DOCKER_HOST=ssh://ubuntu@sami.plus docker compose pull && DOCKER_HOST=ssh://ubuntu@sami.plus docker compose up -d