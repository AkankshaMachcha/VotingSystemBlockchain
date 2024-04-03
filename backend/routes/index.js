const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.use('/candidates', require('./candidates'));
app.use('/votes', require('./votes'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
