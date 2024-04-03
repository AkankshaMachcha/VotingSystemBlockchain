const Candidates = artifacts.require('Candidates');
const Voters = artifacts.require('Voters');

contract('VotingSystem', (accounts) => {
  it('should add a candidate', async () => {
    const candidatesInstance = await Candidates.deployed();
    await candidatesInstance.addCandidate("shbadh", "Bhsdjs", 50, "BETCH");
    // Add assertions to verify the candidate was added successfully
  });

  it('should register a voter', async () => {
    const votersInstance = await Voters.deployed();
    await votersInstance.registerVoter("dja", 20);
    // Add assertions to verify the voter was registered successfully
  });
});