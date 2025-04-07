const express = require('express');
const cors = require('cors'); // ← You need this!

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS so React (port 3000) can talk to backend (port 5000)
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Server Started');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
