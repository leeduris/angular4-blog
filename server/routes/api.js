// Import Modules

const express = require('express');
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose');
const postController = require('../controllers/postController');
const { catchErrors } = require('../handlers/errorHandlers');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to our Database and handle an bad connections

mongoose.connect(process.env.DATABASE, { useMongoClient: true });
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// Set Routing for API

router.get('/posts', catchErrors(postController.getPosts));

router.post('/posts', catchErrors(postController.addPost));

module.exports = router;


