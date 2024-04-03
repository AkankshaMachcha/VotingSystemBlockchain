// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

pragma experimental ABIEncoderV2; // Enable experimental ABI encoder

contract Candidates {
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
        string party;
        uint256 age;
        string qualification;
    }

    mapping(uint256 => Candidate) public candidates;
    uint256 public candidatesCount;

    function addCandidate(string memory _name, string memory _party, uint256 _age, string memory _qualification) public {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0, _party, _age, _qualification);
    }

    function getAllCandidates() public view returns (Candidate[] memory) {
        Candidate[] memory allCandidates = new Candidate[](candidatesCount);

        for (uint256 i = 1; i <= candidatesCount; i++) {
            allCandidates[i - 1] = candidates[i];
        }

        return allCandidates;
    }
}
