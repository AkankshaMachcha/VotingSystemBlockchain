const Candidates = artifacts.require('Candidates');

contract('VotingSystem', (accounts) => {
  let candidatesInstance;

  before(async () => {
    candidatesInstance = await Candidates.deployed();

    // Add some candidates for testing
    await candidatesInstance.addCandidate("Cddate 1", "Party 1", 30, "Degree A");
    await candidatesInstance.addCandidate("Canate 2", "Party 2", 35, "Degree B");
    await candidatesInstance.addCandidate("Cadide 3", "Party 3", 40, "Degree C");
  });

  it('should get all candidates', async () => {
    // Act
    const allCandidates = await candidatesInstance.getAllCandidates();

    // Log candidates to console
    console.log("All Candidates:");
    allCandidates.forEach(candidate => {
      console.log(`Name: ${candidate.name}, Party: ${candidate.party}, Age: ${candidate.age}, Qualification: ${candidate.qualification}`);
    });

    // Assert
    assert.equal(allCandidates.length, 3, "Number of candidates should be 3");
  });
});
