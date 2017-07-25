// Basic Express Execu Code

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Import API Module for connecting MongoDB
const routes = require('./server/routes/api');

// Import Environmental Variables from my variables.env file

require('dotenv').config({ path: 'variables.env' });

// BodyParser Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

// Server Static

app.use(express.static(path.join(__dirname,'dist')));

// Set Main Routing

app.use( '/api' , routes );
 
app.get( ' * ' , ( req , res ) => {
  res.sendFile( path.join(__dirname,'dist/index.html' )); 
});

// Set Port

const port = process.env.PORT || 3001;
app.set('port' , port );

// Create Server && Start App

const server = app.listen(app.get('port'), () => {
  console.log(`Express running 🔥 💣  → PORT ${server.address().port}`);
});