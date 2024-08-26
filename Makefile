#!/usr/bin/make -f

.DEFAULT_GOAL := help

.PHONY: help
help: # このMakefileを表示する(fallback用)
	@cat $(firstword $(MAKEFILE_LIST))

.PHONY: layer
layer: # layer判定scriptを実行する
	. ./scripts/determine-layer.sh
