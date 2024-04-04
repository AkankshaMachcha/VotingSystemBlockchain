const express = require('express');
const {Web3} = require('web3');
const CandidatesABI = require('../build/contracts/Candidates.json').abi;
const ElectionABI = require('../build/contracts/Election.json').abi;
const VotersABI = require('../build/contracts/Voters.json').abi;

const app = express();
const port = 3000;

// Connect to Ganache
const web3 = new Web3('http://127.0.0.1:7545');

// Contract addresses
const candidatesContractAddress = '0xE0f9b4E13Acc68241780308E70b6481c23Ee6Fed'; // Update with actual address
const electionContractAddress = '0x1d24edCC36797d6EE53cE79Bf5ddD47c72c385F3'; // Update with actual address
const votersContractAddress = '0x045cfcDfa3009a2962E670af34F5E7625CEC746d'; // Update with actual address

// Contract instances
const candidatesContract = new web3.eth.Contract(CandidatesABI, candidatesContractAddress);
const electionContract = new web3.eth.Contract(ElectionABI, electionContractAddress);
const votersContract = new web3.eth.Contract(VotersABI, votersContractAddress);

app.use(express.json());

// Endpoint to add a candidate
app.post('/candidates', async (req, res) => {
    const { name, party, age, qualification } = req.body;
    try {
        // Call addCandidate function from Candidates contract
        await candidatesContract.methods.addCandidate(name, party, age, qualification).send({ from: '0xc1fD82123DFB59D76fdE1F8f5FbC6250786BDa4D' }); // Update with sender address
        res.status(201).json({ message: 'Candidate added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to register a voter
app.post('/voters', async (req, res) => {
    const { name, age } = req.body;
    try {
        // Call registerVoter function from Voters contract
        await votersContract.methods.registerVoter(name, age).send({ from: '0xc1fD82123DFB59D76fdE1F8f5FbC6250786BDa4D' }); // Update with sender address
        res.status(201).json({ message: 'Voter registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to fetch all candidates
app.get('/candidates', async (req, res) => {
    try {
        const allCandidates = await candidatesContract.methods.getAllCandidates().call();
        res.status(200).json(allCandidates);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to fetch voting results
app.get('/results', async (req, res) => {
    try {
        // Call getAllCandidates function from Candidates contract
        const allCandidates = await candidatesContract.methods.getAllCandidates().call();
        const results = allCandidates.map(candidate => ({
            name: candidate.name,
            voteCount: candidate.voteCount
        }));
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
