#!/usr/bin/env bash
rm -rf dist/* &&
echo 'BUILD_FLAG=yinghekongjian' > .env &&
parcel build ./*.ejs --no-cache --no-source-maps --out-dir dist/java &&
echo 'BUILD_FLAG=jirengu' > .env &&
parcel build ./*.ejs --no-cache --no-source-maps --public-url /new --out-dir dist/jirengu