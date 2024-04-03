// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

import "./Candidates.sol";
import "./Voters.sol";

contract Election {
    Candidates public candidatesContract;
    Voters public votersContract;

    mapping(address => bool) public isAdmin;
    address public admin;

    constructor() public {
        admin = msg.sender;
        isAdmin[msg.sender] = true;
        candidatesContract = new Candidates();
        votersContract = new Voters();
    }

    modifier onlyAdmin() {
        require(isAdmin[msg.sender], "Only admin can call this function");
        _;
    }

    function addCandidate(string memory _name, string memory _party, uint256 _age, string memory _qualification) public onlyAdmin {
        candidatesContract.addCandidate(_name, _party, _age, _qualification);
    }

    function registerVoter(string memory _name, uint256 _age) public {
        votersContract.registerVoter(_name, _age);
    }
}