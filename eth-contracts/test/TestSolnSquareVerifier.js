var SolnSquareVerifier = artifacts.require('./SolnSquareVerifier');
var Verifier = artifacts.require("./verifier.sol");
var proof_json = require("../../zokrates/code/square/proof.json");


contract('TestSolnSquareVerifier', accounts => {
    const NAME = 'America Real Estate Marketplace';
    const SYMBOL = 'ARM';

    const contractOwner = accounts[0];
    let eventSolutionAddedEmitted = false;

    describe('Test SolnSquareVerifier', function () {

        beforeEach(async function () {
            this.contractVerifier = await Verifier.new({from: contractOwner});
            let verifierAddress = this.contractVerifier.address;
            this.contractERC721Mintable = await SolnSquareVerifier.new(verifierAddress, NAME, SYMBOL, {from: contractOwner});
        })

        it('Test if a new solution can be added for contract', async function () { 
            const solution = {
                index: 1,
                owner: accounts[0],
            }

            eventSolutionAddedEmitted = false

            // Watch the emitted event SolutionAdded()
            await this.contractERC721Mintable.SolutionAdded(null, (error, event) => {
                eventSolutionAddedEmitted = true;
            });

            await this.contractERC721Mintable.addSolution(
                solution.owner,
                solution.index,
                proof_json.proof.a,
                proof_json.proof.b,
                proof_json.proof.c,
                proof_json.inputs,
                {from: contractOwner}
            );

            assert.equal(true, eventSolutionAddedEmitted, 'Invalid event emitted')
        })

        it('Test if an ERC721 token can be minted for contract', async function () { 
            var isMinted = false;
            if (eventSolutionAddedEmitted) {
                try {
                    await this.contractERC721Mintable.mintWithSolution(
                        accounts[1], 
                        2, 
                        proof_json.proof.a,
                        proof_json.proof.b,
                        proof_json.proof.c,
                        proof_json.inputs,
                        {from: contractOwner}
                    );
                    isMinted = true
                } catch (error) {
                    console.log({error})
                }
            }
            assert.equal(true, isMinted, 'Solution is not minted')
        })

    });
});