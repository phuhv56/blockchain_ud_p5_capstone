// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates

// Test verification with correct proof
// - use the contents from proof.json generated from zokrates steps

    
// Test verification with incorrect proof
var Verifier = artifacts.require("./verifier.sol");
var proof_json = require("../../zokrates/code/square/proof.json");

var _incorrect_proof_json = {
    "proof": {
        "a": ["0x25cfc1567b79252266aa1a57a1c1e62f9f74fa01ecbefd2b38a4259718476c1f", "0x242e82a001a26a6f1a0a117ed4c5ac2df46cc178972bd72f1065674ec7ee775f"],
        "b": [["0x26558b401f58c2c1ff6d8591e071edfd3767245cfe35e6ef07f91914afbdf021", "0x0d793db54d2cd02a2669fac3bede4f989bb19ae43051a65e8fef6604f8cc4a8c"], ["0x0808479330fd3e2309c951897ffb85070cd735493b8b04de9d79889624ea5944", "0x0c373616d1a9befdd0d87b8444031dd3069dc983458ccf53dd029df75a4734c9"]],
        "c": ["0x22212b97883e91d828a769c98ce3b48c414b4bb135578f17b21c3569c86cb753", "0x1b218fd43712bb99103a1605a5d4a745c6900c701e9853e98f723cbfed25312d"]
    },
    "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000001", "0x0000000000000000000000000000000000000000000000000000000000000001"]
};

contract('TestVerifier', accounts => {
    const owner = accounts[0];

    describe('Test Verifier', function () {
        beforeEach(async function () {
            this.contract = await Verifier.new({from: owner});
        })

        it('verifyTx return true', async function () {
            let result = await this.contract.verifyTx.call(
                proof_json.proof.a,
                proof_json.proof.b,
                proof_json.proof.c,
                proof_json.inputs
            );
            assert.equal(result, true);

        });
        
        it('verifyTx return false', async function () {
            let result = await this.contract.verifyTx.call(
                proof_json.proof.a,
                proof_json.proof.b,
                proof_json.proof.c,
                ['0x0000000000000000000000000000000000000000000000000000000000000012', '0x0000000000000000000000000000000000000000000000000000000000000032']
            );
            assert.equal(result, false)
        });
    });

})