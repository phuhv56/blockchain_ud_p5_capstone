# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Run steps
- docker run -v /Users/moonie/Workspaces/udacity_blockchain/Blockchain-Capstone/zokrates/code:/home/zokrates/code -ti zokrates/zokrates:0.5.0 /bin/bash
- 

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)

# Deployment result

* SolnSquareVerifier Contract: [0xC960553E3375014d7E61081496aCCBfD2D7AbeE3](https://rinkeby.etherscan.io/address/0xC960553E3375014d7E61081496aCCBfD2D7AbeE3)
* Verifier Contract: [0xAB72f0Eb4DCA329A2a48c75e63654b8b478CDc5c](https://rinkeby.etherscan.io/address/0xAB72f0Eb4DCA329A2a48c75e63654b8b478CDc5c)
* CustomERC721Token Contract: [0x1D8124142D3FfEa12A55cfa680cC02f67b6c3c1f](https://rinkeby.etherscan.io/address/0x1D8124142D3FfEa12A55cfa680cC02f67b6c3c1f)


```bash
❯ truffle migrate --reset --network rinkeby


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x89824ba86cb12a2881862fa1ee0c9185ed16b5ececd5942e418cc7f8b6a18134
   > Blocks: 1            Seconds: 17
   > contract address:    0x6A61C157199231D9Ae276b05Db27942D7DfC7767
   > block number:        11276731
   > block timestamp:     1661618190
   > account:             0x183DdA6bE68413a8C5d77e43019E53099eaD9C58
   > balance:             0.02424441351562146
   > gas used:            226537 (0x374e9)
   > gas price:           1.499162247 gwei
   > value sent:          0 ETH
   > total cost:          0.000339615717948639 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 11276732)
   > confirmation number: 2 (block: 11276733)
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000339615717948639 ETH


2_deploy_contracts.js
=====================

   Deploying 'CustomERC721Token'
   -----------------------------
   > transaction hash:    0xa94ffe564ab2b5a54bc655f4afa298ad1196720665f05fd49645a7621b26b997
   > Blocks: 2            Seconds: 21
   > contract address:    0x1D8124142D3FfEa12A55cfa680cC02f67b6c3c1f
   > block number:        11276736
   > block timestamp:     1661618265
   > account:             0x183DdA6bE68413a8C5d77e43019E53099eaD9C58
   > balance:             0.019887506219707609
   > gas used:            2860465 (0x2ba5b1)
   > gas price:           1.499162246 gwei
   > value sent:          0 ETH
   > total cost:          0.00428830113400439 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 11276737)
   > confirmation number: 2 (block: 11276738)

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0xbb9f3512b5311ab890d34276f29a3d909d9fa503fc4b592377c08f07f8093a6a
   > Blocks: 1            Seconds: 9
   > contract address:    0xAB72f0Eb4DCA329A2a48c75e63654b8b478CDc5c
   > block number:        11276739
   > block timestamp:     1661618310
   > account:             0x183DdA6bE68413a8C5d77e43019E53099eaD9C58
   > balance:             0.018399295352921944
   > gas used:            992695 (0xf25b7)
   > gas price:           1.499162247 gwei
   > value sent:          0 ETH
   > total cost:          0.001488210866785665 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 11276740)
   > confirmation number: 2 (block: 11276741)

   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x06283603996a8080cc5eafff0aa3885ed838ea83f9af4b12eea603078e4a378b
   > Blocks: 1            Seconds: 9
   > contract address:    0xC960553E3375014d7E61081496aCCBfD2D7AbeE3
   > block number:        11276742
   > block timestamp:     1661618355
   > account:             0x183DdA6bE68413a8C5d77e43019E53099eaD9C58
   > balance:             0.01336309665176047
   > gas used:            3359342 (0x33426e)
   > gas price:           1.499162247 gwei
   > value sent:          0 ETH
   > total cost:          0.005036198701161474 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 11276743)
   > confirmation number: 2 (block: 11276744)
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.010812710701951529 ETH

Summary
=======
> Total deployments:   4
> Final cost:          0.011152326419900168 ETH
```



```bash

truffle(develop)> test
Using network 'develop'.


Compiling your contracts...
===========================
> Compiling ./contracts/ERC721Mintable.sol
> Compiling ./contracts/SolnSquareVerifier.sol
> Compilation warnings encountered:

    project:/contracts/Oraclize.sol:320:7: Warning: Unreachable code.
      _networkID; // silence the warning and remain backwards compatible
      ^--------^
,project:/contracts/Oraclize.sol:373:7: Warning: Unreachable code.
      _myid; _result; _proof; // Silence compiler warnings
      ^--------------------^
,project:/contracts/Oraclize.sol:371:5: Warning: Function state mutability can be restricted to pure
    function __callback(bytes32 _myid, string memory _result, bytes memory _proof) public {
    ^ (Relevant source part starts here and spans across multiple lines).
,project:/contracts/verifier.sol:449:5: Warning: Function state mutability can be restricted to view
    function addition(G2Point memory p1, G2Point memory p2) internal returns (G2Point memory r) {
    ^ (Relevant source part starts here and spans across multiple lines).

> Artifacts written to /var/folders/tx/ngfx2q350214v69gyvl04bl80000gn/T/test--45863-qvrDRtoekBsk
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang


  Contract: TestERC721Mintable
    match erc721 spec
      ✔ should return total supply
      ✔ should get token balance
      ✔ should return token uri (56ms)
      ✔ should transfer token from one owner to another (54ms)
    have ownership properties
      ✔ should fail when minting when address is not contract owner (67ms)
      ✔ should return contract owner

  Contract: TestSolnSquareVerifier
    Test SolnSquareVerifier
      ✔ Test if a new solution can be added for contract (1590ms)
      ✔ Test if an ERC721 token can be minted for contract (1578ms)

  Contract: TestVerifier
    Test Verifier
      ✔ verifyTx return true (509ms)
      ✔ verifyTx return false (509ms)


  10 passing (8s)


```