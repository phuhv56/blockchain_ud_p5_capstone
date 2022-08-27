// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <=0.8.16;

import './ERC721Mintable.sol';
import './verifier.sol';

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CustomERC721Token {
    Verifier private verifier;

    constructor(address verifierAddress, string memory token, string memory symbol) public CustomERC721Token(token, symbol)  {
        verifier = Verifier(verifierAddress);
    }

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address owner;
    }

    // TODO define an array of the above struct
    Solution[] solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping(uint256 => Solution) uniqueSubmittedSolutions;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(uint256 index, address owner);

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(
        address owner, 
        uint256 index,
        uint256[2] memory a,
        uint256[2][2] memory a1,
        uint256[2] memory a2,
        uint256[2] memory inputs
        ) public {
        if (verifier.verifyTx(a, a1, a2, inputs)) {
            Solution memory solution = Solution({
                index: index,
                owner: owner
            });
            solutions.push(solution);
            uniqueSubmittedSolutions[index] = solution;
            emit SolutionAdded(index, owner);
        }
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintWithSolution(
        address owner, 
        uint256 index,
        uint256[2] memory a,
        uint256[2][2] memory a1,
        uint256[2] memory a2,
        uint256[2] memory inputs
    ) public {
        if (verifier.verifyTx(a, a1, a2, inputs)) {
            _mint(owner, index);
            uniqueSubmittedSolutions[index].owner = owner;
        }
    }

}


























