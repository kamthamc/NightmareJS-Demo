DOCKER=docker
SERVICE_NAME=nightmare-js-demo
RELEASE_TAG=latest

JENKINS_HOME ?= $(HOME)


package:
	$(DOCKER) build \
		-t $(SERVICE_NAME) \
		-t $(SERVICE_NAME):latest \
		.

test:
	$(DOCKER) run \
		-it \
		--rm \
		--name=$(SERVICE_NAME) \
		$(SERVICE_NAME):latest
