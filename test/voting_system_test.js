
const Candidates = artifacts.require('Candidates');
const Voters = artifacts.require('Voters');

contract('VotingSystem', (accounts) => {
  let candidatesInstance;
  let votersInstance;

  before(async () => {
    candidatesInstance = await Candidates.deployed();
    votersInstance = await Voters.deployed();
  });

  it('should add a candidate', async () => {
    // Arrange
    const candidateName = "akanksha1";
    const party = "ijdifj";
    const age = 45;
    const qualification = "BETCH";

    // Act
    await candidatesInstance.addCandidate(candidateName, party, age, qualification);

    // Assert
    const candidate = await candidatesInstance.candidates(1);
    assert.equal(candidate.name, candidateName, "Candidate name should match");
    assert.equal(candidate.party, party, "Party should match");
    assert.equal(candidate.age, age, "Age should match");
    assert.equal(candidate.qualification, qualification, "Qualification should match");
  });

  it('should register a voter', async () => {
    // Arrange
    const voterName = "uedwi";
    const age = 25;

    // Act
    await votersInstance.registerVoter(voterName, age);

    // Assert
    const voter = await votersInstance.voters(accounts[0]);
    assert.equal(voter.name, voterName, "Voter name should match");
    assert.equal(voter.age, age, "Age should match");
  });
});
