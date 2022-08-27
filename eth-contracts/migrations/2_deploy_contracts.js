// migrating the appropriate contracts
var Verifier = artifacts.require("./verifier.sol");
var CustomERC721Token = artifacts.require("CustomERC721Token");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = async function(deployer) {
  const NAME = 'America Real Estate Marketplace';
  const SYMBOL = 'ARM';

  await deployer.deploy(CustomERC721Token, NAME, SYMBOL);
  await deployer.deploy(Verifier);
  await deployer.deploy(SolnSquareVerifier, Verifier.address, NAME, SYMBOL);
};
