// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract Voters {
    struct Voter {
        string name;
        bool hasVoted;
        uint256 vote;
        bool isRegistered;
        uint256 age;
    }

    mapping(address => Voter) public voters;
    address[] public voterAddresses;

    function registerVoter(string memory _name, uint256 _age) public {
        require(!voters[msg.sender].isRegistered, "Voter is already registered");
        voters[msg.sender] = Voter(_name, false, 0, true, _age);
        voterAddresses.push(msg.sender);
    }
}
