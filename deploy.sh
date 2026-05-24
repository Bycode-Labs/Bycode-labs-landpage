#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

TEMP_DIST="./dist_tmp"

echo "Building with Docker..."
# Build to a temporary directory first to ensure we don't break the existing dist on failure
docker build --output type=local,dest=$TEMP_DIST -f Build.Dockerfile .

echo "Build successful! Updating dist folder..."
mkdir -p ./dist
rm -rf ./dist/*
cp -a $TEMP_DIST/. ./dist/
rm -rf $TEMP_DIST

echo "Build complete! Files are available in the ./dist directory."
