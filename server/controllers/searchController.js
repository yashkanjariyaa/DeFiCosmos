// Assuming you have mongoose and express installed
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Replace 'YourModel' with the actual model name

// Define a route to handle search requests
const searchController = async (req, res) => {
  try {
    const { q } = req.query; // Assuming the search query is passed as a query parameter

    // Perform the search using Mongoose find method
    const searchResults = await User.find({ name: q }); // Using case-insensitive regex for partial matching
    res.json({ results: searchResults });
  } catch (error) {
    console.error('Error searching:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = searchController;
