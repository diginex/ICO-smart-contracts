"use strict";

// @notice Tests the functionality inherited by Token from openzeppelin-solidity DetailedERC20 implementation

const BigNumber = web3.BigNumber;

require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(BigNumber))
    .should();

const TokenContract = artifacts.require('Token');

contract('Token', accounts => {
    let detailedERC20 = null;

    beforeEach(async function () {
        detailedERC20 = await TokenContract.new(accounts[0], accounts[1]);
    });

    it('has a name', async function () {
        const envVar = process.env['ERC20_NAME']
        assert(envVar, 'Environment vatiable "ERC20_NAME" is not defined');
        const name = await detailedERC20.name();
        name.should.be.equal(envVar);
    });

    it('has a symbol', async function () {
        const envVar = process.env['ERC20_SYMBOL']
        assert(envVar, 'Environment vatiable "ERC20_SYMBOL" is not defined');
        const symbol = await detailedERC20.symbol();
        symbol.should.be.equal(envVar);
    });

    it('has an amount of decimals', async function () {
        const envVar = process.env['ERC20_DECIMALS']
        assert(envVar, 'Environment vatiable "ERC20_DECIMALS" is not defined');
        const decimals = await detailedERC20.decimals();
        decimals.should.be.bignumber.equal(envVar);
    });
});
