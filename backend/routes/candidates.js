// const express = require('express');
// const router = express.Router();
// const Candidates = require('../../build/contracts/Candidates.json');
// const cors = require('cors');
// const {Web3} = require('web3');


// // Set up web3
// const web3 = new Web3('http://127.0.0.1:7545');
// const candidatesContract = new web3.eth.Contract(Candidates.abi, '0xA61cCf693E8aAE256A4B1DF3cB576893370a6F00');

// // Enable CORS
// router.use(cors());

// // Route to add a candidate
// router.post('/candidates', async (req, res) => {
//   const { name, party, age, qualification } = req.body;
//   try {
//     // Call the addCandidate function from the contract
//     await candidatesContract.methods.addCandidate(name, party, age, qualification).send({ from: '0xcf5FB27649e44CCb0c67fA1e8c86ee23e7422767' });
//     res.status(201).json({ message: 'Candidate added successfully' });
//   } catch (error) {
//     console.error('Error adding candidate:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Candidates = require('../../build/contracts/Candidates.json');
const {Web3} = require('web3');

// Set up web3
const web3 = new Web3('http://127.0.0.1:7545');
const candidatesContract = new web3.eth.Contract(Candidates.abi, '0xE0f9b4E13Acc68241780308E70b6481c23Ee6Fed');

// Route to add a candidate
router.post('/candidates', async (req, res) => {
  const { name, party, age, qualification } = req.body;
  try {
    // Call the addCandidate function from the contract
    await candidatesContract.methods.addCandidate(name, party, age, qualification).send({ from: '0x33aF50C6A4aA0D8477aAB0B94B7794FdE3F12ce2' });
    res.status(201).json({ message: 'Candidate added successfully' });
  } catch (error) {
    console.error('Error adding candidate:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch all candidates
router.get('/candidates', async (req, res) => {
  try {
    const candidates = await candidatesContract.methods.getAllCandidates().call();
    res.status(200).json(candidates);
  } catch (error) {
    console.error('Error fetching candidates:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
