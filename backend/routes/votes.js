// const express = require('express');
// const router = express.Router();
// const Election = require('../../build/contracts/Election.json');
// const {Web3} = require('web3');
// const cors = require('cors');

// // Set up web3
// const web3 = new Web3('http://127.0.0.1:7545');
// const electionContract = new web3.eth.Contract(Election.abi, '0x15FEBfeb574Ab08b6010079184A26ed05163fbf4');

// // Enable CORS
// router.use(cors());

// // Route to register a voter
// router.post('/votes', async (req, res) => {
//   const { name, age } = req.body;
//   try {
//     // Call the registerVoter function from the contract
//     await electionContract.methods.registerVoter(name, age).send({ from: '0xcf5FB27649e44CCb0c67fA1e8c86ee23e7422767' });
//     res.status(201).json({ message: 'Voter registered successfully' });
//   } catch (error) {
//     console.error('Error registering voter:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Election = require('../../build/contracts/Election.json');
const {Web3} = require('web3');

// Set up web3
const web3 = new Web3('http://127.0.0.1:7545');
const electionContract = new web3.eth.Contract(Election.abi, '0x76DC774EC913055fB7c2dd5FA243CF3B06c60579');

// Route to allow a voter to cast a vote
router.post('/vote', async (req, res) => {
  const { candidateId } = req.body;
  try {
    // Call the vote function from the contract
    await electionContract.methods.vote(candidateId).send({ from: '0xcf5FB27649e44CCb0c67fA1e8c86ee23e7422767' });
    res.status(200).json({ message: 'Vote cast successfully' });
  } catch (error) {
    console.error('Error casting vote:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch election results
router.get('/results', async (req, res) => {
  try {
    const results = await electionContract.methods.getResults().call();
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching results:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
