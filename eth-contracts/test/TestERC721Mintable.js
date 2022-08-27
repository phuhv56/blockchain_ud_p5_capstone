var CustomERC721Token = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    const NAME = 'America Real Estate Marketplace';
    const SYMBOL = 'ARM';

    const owner = accounts[0];
    const account1 = accounts[1];
    const account2 = accounts[2];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await CustomERC721Token.new(NAME, SYMBOL, {from: owner});

            // TODO: mint multiple tokens
            await this.contract.mint(account1, 1, {from: owner});
            await this.contract.mint(account1, 2, {from: owner});
            await this.contract.mint(account2, 3, {from: owner});
            await this.contract.mint(account2, 4, {from: owner});
        })

        it('should return total supply', async function () { 
            assert.equal(await this.contract.totalSupply(), 4)
        })

        it('should get token balance', async function () { 
            assert.equal(await this.contract.balanceOf(account1), 2)
            assert.equal(await this.contract.balanceOf(account2), 2)
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
            await this.contract.setTokenURI(1)
            const uri = await this.contract.tokenURI(1)
            assert.equal(uri, 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1')
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(account1, account2, 1, {from: account1})
            expect(await this.contract.balanceOf(account1)).to.eql(web3.utils.toBN(1))
        })
    });

    describe('have ownership properties', function () {

        const NAME = 'America Real Estate Marketplace';
        const SYMBOL = 'ARM';
        beforeEach(async function () { 
            this.contract = await CustomERC721Token.new(NAME, SYMBOL, {from: owner});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            await this.contract.mint(account2, 4, {from: owner})
            assert.equal(5, 5)
        })

        it('should return contract owner', async function () { 
            assert.equal(await this.contract.getOwnerAddress(), owner)
        })

    });
})