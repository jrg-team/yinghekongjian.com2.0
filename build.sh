#!/usr/bin/env bash

git fetch &&
git pull origin master && 
npm run build:jirengu &&
npm run build:java &&
git add . &&
git commit -m 'rebuild' &&
git push origin gh-pages
