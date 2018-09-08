# Token Sale Smart Contracts

## Overview

These [Ethereum][ethereum] smart contracts are used by [Diginex][diginex]'s Token Sale platform.
The smart contracts support multiple sales periods over time, token locking and flexible token vesting configuration.

## Usage

Follow these steps:

1. If you want to change the smart contract template variables (such as name, symbol, etc.), you need to set the
following environment variables according to your token parameters (see `scripts/test.env` for an example):

```bash
$ ENV_VARS_OVERRIDE=whatever
$ ERC20_NAME=Token
$ ERC20_SYMBOL=TOK
$ ERC20_DECIMALS=18
```

Similarly, you can import this repo into your repo as a git submodule and define these environment variables
from your repo.

2. Run `scripts/build.sh` to generate the `*.sol` contract code and the build files `truffle/build/contracts/*.json`.

```bash
$ scripts/build.sh
```

## Contracts

Please see the [contracts/](truffle/contracts) directory.

## Develop

Contracts are written in [Solidity][solidity] and tested using [Truffle][truffle] and [ganache-cli][ganache-cli].

### Dependencies

```bash
# Install local node dependencies
$ npm install
```

### Test

```bash
# Compile all smart contracts
$ npm run build

# Run all tests
$ npm test

# Run test coverage analysis
$ npm run coverage
```

### Docker

A Docker image to run containerized testing is provided. Requires [Docker Compose][docker compose].

```bash
# Build the container and run all tests
$ make build test

# Run a test for a single contract
$ docker-compose run --rm truffle npm test test/<TEST_NAME>.test.js
```

[ethereum]: https://www.ethereum.org/
[diginex]: https://www.diginex.com/
[erc20]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md
[solidity]: https://solidity.readthedocs.io/en/develop/
[truffle]: http://truffleframework.com/
[ganache-cli]: https://github.com/trufflesuite/ganache-cli
[docker compose]: https://docs.docker.com/compose/
