const express = require('express');
const cors = require('cors'); // To enable cross-origin requests from our frontend

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS so requests from the frontend (port 3000) are allowed
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory "database" for media items
let mediaItems = [
  // Initial example item
  {
    id: 1,
    title: "Inception",
    category: "Movie",
    rating: 5
  }
];

// GET /media - returns all media items
app.get('/media', (req, res) => {
  res.json(mediaItems);
});

// POST /media - adds a new media item
app.post('/media', (req, res) => {
  // Expecting an object with title, category, and rating in the body
  const newItem = req.body;
  
  // Simple validation: ensure title and category are provided
  if (!newItem.title || !newItem.category) {
    return res.status(400).json({ error: "Title and category are required." });
  }
  
  // Create a new ID (for simplicity, we use current timestamp or increment)
  newItem.id = mediaItems.length ? mediaItems[mediaItems.length - 1].id + 1 : 1;
  
  // Add the new item to our in-memory array
  mediaItems.push(newItem);
  
  // Return the new item
  res.status(201).json(newItem);
});

// Basic test route
app.get('/', (req, res) => {
  res.send('Server Started');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
