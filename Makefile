### Configurations

# Temporary directory for storing singleton flags
FLAG_DIR := $(shell mktemp -d -t dep)

# Act requires extra commands for Apple Silicon chips
ifeq ("$(shell uname -m)", "arm64")
	ACT_ARGS := --container-architecture linux/amd64
endif


### Primary targets

.PHONY: all prettier test test-lint clean


all: test


prettier:
	npx prettier -w ./**/*.md


test: dependencies
	act $(ACT_ARGS) --rm pull_request


test-lint: dependencies
	act $(ACT_ARGS) --rm -j megalinter pull_request


clean:
	rm -rf megalinter-reports
	-docker rmi catthehacker/ubuntu:act-latest


### Dependency management and helpers

.PHONY: dependencies


dependencies: $(FLAG_DIR)/act


$(FLAG_DIR)/act:
	@if ! command -v act >/dev/null 2>&1; then \
		echo "ERROR: Unable to locate test framework dependency 'act'; attempting to install!\n"; \
		echo "       Please install act according to the instructions, here:"; \
		echo "       https://github.com/nektos/act\n"; \
		exit 1; \
	fi

	@touch "$(FLAG_DIR)/act";
