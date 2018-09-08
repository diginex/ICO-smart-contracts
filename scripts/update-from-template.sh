#!/usr/bin/env bash

set -e
set -x

cp truffle/contracts/templates/Token.sol.template truffle/contracts/Token.sol

if [[ -z "${ENV_VARS_OVERRIDE}" ]]; then
    set -a
    . scripts/test.env
    set +a
fi

sed -i -e 's/"ERC20_NAME"/"'$ERC20_NAME'"/g' truffle/contracts/Token.sol
sed -i -e 's/"ERC20_SYMBOL"/"'$ERC20_SYMBOL'"/g' truffle/contracts/Token.sol
sed -i -e 's/ERC20_DECIMALS/'$ERC20_DECIMALS'/g' truffle/contracts/Token.sol
sed -i -e 's/ERC20_TOKEN_SUPPLY/'$ERC20_TOKEN_SUPPLY'/g' truffle/contracts/Token.sol
sed -i -e 's/ERC20_MAX_TOKEN_SALES/'$ERC20_MAX_TOKEN_SALES'/g' truffle/contracts/Token.sol
