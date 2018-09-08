#!/usr/bin/env bash
set -e

scripts/update-from-template.sh

npm i

cd truffle
../node_modules/.bin/truffle compile
cd ..
