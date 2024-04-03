// // // const express = require('express');
// // // const app = express();
// // // const port = process.env.PORT || 3000;
// // // const cors = require('cors');
// // // const candidatesRouter = require('./routes/candidates');
// // // const votesRouter = require('./routes/votes');

// // // // Middleware
// // // app.use(cors());
// // // app.use(express.json());

// // // // Routes
// // // app.use('/api/candidates', candidatesRouter);
// // // app.use('/api/votes', votesRouter);

// // // // Start the server
// // // app.listen(port, () => {
// // //   console.log(`Server is running on port ${port}`);
// // // });
// // const express = require('express');
// // const app = express();
// // const cors = require('cors');

// // // Middleware
// // // app.use(cors({
// // //   origin : 'http://10.0.2.2:3000'
// // // }));

// // app.use(cors);
// // app.use(express.json());

// // // Routes
// // const candidatesRouter = require('./routes/candidates');
// // const votesRouter = require('./routes/votes');
// // app.use('/api/candidates', candidatesRouter);
// // app.use('/api/votes', votesRouter);

// // // Start the server
// // const port = process.env.PORT || 3000;
// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });

// const express = require('express');
// const { Web3 } = require('web3');
// const CandidatesContract = require('../build/contracts/Candidates.json');
// const VotersContract = require('../build/contracts/Voters.json');
// const cors = require('cors'); // Import cors package

// // Initialize Express app
// const app = express();
// const port = 3000;

// // Use CORS middleware
// app.use(cors({
//   origin : 'http://10.0.2.2:3000'
// }));

// // Connect to Ganache blockchain
// const web3 = new Web3('http://127.0.0.1:7545');

// // Load smart contracts
// const candidatesContract = new web3.eth.Contract(CandidatesContract.abi, '0x6492Ac3c24438f04319B6c28A0f1241e84c9c9eB'); // Replace with your Candidates contract address
// const votersContract = new web3.eth.Contract(VotersContract.abi, '0x28E738AC53b42692e4bB429054DCFb4638364dE7'); // Replace with your Voters contract address

// const contractCandidate = new web3.eth.Contract(contractABI, candidatesContract);

// // Example: Call a view/pure function of the contract
// contractCandidate.methods.getAllCandidates().call()
//   .then(candidates => console.log('Candidates:', candidates))
//   .catch(error => console.error('Error fetching candidates:', error));

// // Endpoint to add candidate
// // app.post('/candidates', async (req, res) => {
// //   try {
// //     const { name, party, age, qualification } = req.body;
// //     // Perform transaction to add candidate
// //     const accounts = await web3.eth.getAccounts();

// //     contractCandidate.methods.addCandidate(name, party, age, qualification).send({ from: '0x73cf342246c6686FE9026Ac62022aefc899671d9' })
// //   .then(receipt => console.log('Transaction receipt:', receipt))
// //   .catch(error => console.error('Error adding candidate:', error));
// //     // await candidatesContract.methods.addCandidate(name, party, age, qualification).send({ from: accounts[0] });
// //     // res.status(200).send('Candidate added successfully');
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send('Error adding candidate');
// //   }
// // });


// app.post('/candidates', async (req, res) => {
//   try {
//     const { name, party, age, qualification } = req.body;
//     // Perform transaction to add candidate
//     const accounts = await web3.eth.getAccounts();

//     const receipt = await contractCandidate.methods.addCandidate(name, party, age, qualification)
//       .send({ from: '0x73cf342246c6686FE9026Ac62022aefc899671d9' });

//     console.log('Transaction receipt:', receipt);
//     res.status(200).send('Candidate added successfully');
//   } catch (error) {
//     console.error('Error adding candidate:', error);
//     res.status(500).send('Error adding candidate');
//   }
// });


// // Endpoint to get list of candidates (for admin)
// app.get('/candidates', async (req, res) => {
//   try {
//     // Call smart contract function to get all candidates
//     const candidates = await candidatesContract.methods.getAllCandidates().call();
//     res.status(200).json(candidates);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error getting candidates');
//   }
// });

// // Endpoint to register voter
// app.post('/voters', async (req, res) => {
//   try {
//     const { name, age } = req.body;
//     // Perform transaction to register voter
//     const accounts = await web3.eth.getAccounts();
//     await votersContract.methods.registerVoter(name, age).send({ from: accounts[0] });
//     res.status(200).send('Voter registered successfully');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error registering voter');
//   }
// });

// // Endpoint to get final voting results
// app.get('/results', async (req, res) => {
//   try {
//     // Call smart contract function to get all candidates
//     const candidates = await candidatesContract.methods.getAllCandidates().call();

//     // Create an array to hold the results
//     const results = [];

//     // Loop through each candidate to get their vote count
//     for (const candidate of candidates) {
//       const voteCount = candidate.voteCount;
//       results.push({ name: candidate.name, voteCount });
//     }

//     res.status(200).json(results);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error getting voting results');
//   }
// });

// // Endpoint to cast vote
// app.post('/vote', async (req, res) => {
//   try {
//     const { candidateId } = req.body;
//     const userAddress = req.headers['0x73cf342246c6686FE9026Ac62022aefc899671d9']; // Assuming user's Ethereum address is sent in headers

//     // Perform transaction to cast vote
//     const accounts = await web3.eth.getAccounts();
//     await candidatesContract.methods.vote(candidateId).send({ from: userAddress });

//     res.status(200).send('Vote cast successfully');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error casting vote');
//   }
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



const express = require('express');
const {Web3} = require('web3');
const CandidatesContract = require('../build/contracts/Candidates.json');
const VotersContract = require('../build/contracts/Voters.json');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://10.0.2.2:3000'
}));

const web3 = new Web3('http://127.0.0.1:7545');

const candidatesContract = new web3.eth.Contract(CandidatesContract.abi, '0x413Abe3DdBfe3281f4d5a042CfeCdC18Df8cC70C');
const votersContract = new web3.eth.Contract(VotersContract.abi, '0xC6fa08CF73ba6745BAFEA595B73E30Fa23B4640a');

app.use(express.json());

app.post('/candidates', async (req, res) => {
  try {
    const { name, party, age, qualification } = req.body;
    const receipt = await contractCandidate.methods.addCandidate(name, party, age, qualification)
      .send({ from: '0x73cf342246c6686FE9026Ac62022aefc899671d9' });

    console.log('Transaction receipt:', receipt);
    res.status(200).send('Candidate added successfully');
  } catch (error) {
    console.error('Error adding candidate:', error);
    res.status(500).send('Error adding candidate');
  }
});

app.get('/candidates', async (req, res) => {
  try {
    const candidates = await candidatesContract.methods.getAllCandidates().call();
    res.status(200).json(candidates);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error getting candidates');
  }
});

app.post('/voters', async (req, res) => {
  try {
    const { name, age } = req.body;
    const accounts = await web3.eth.getAccounts();
    await votersContract.methods.registerVoter(name, age).send({ from: accounts[0] });
    res.status(200).send('Voter registered successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error registering voter');
  }
});

app.get('/results', async (req, res) => {
  try {
    const candidates = await candidatesContract.methods.getAllCandidates().call();
    const results = candidates.map(candidate => ({ name: candidate.name, voteCount: candidate.voteCount }));
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error getting voting results');
  }
});

app.post('/vote', async (req, res) => {
  try {
    const { candidateId } = req.body;
    const userAddress = req.headers['0x73cf342246c6686FE9026Ac62022aefc899671d9'];

    const accounts = await web3.eth.getAccounts();
    await candidatesContract.methods.vote(candidateId).send({ from: userAddress });

    res.status(200).send('Vote cast successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error casting vote');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
