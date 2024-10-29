/*
Server server.js
*/

/*
Global variables
*/
const express = require("express");
const dotenv = require("dotenv");

let projectData = {}; // Empty JS object that acts as an API endpoint for all your Express server routes.

/*
Express server setup
*/
// Start up an instance of the app.
const app = express();

/*
Dependencies and middleware
*/
// Here we are configuring Express to use body-parser as middleware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross-origin allowance.
const cors = require("cors");
app.use(cors());

/*
Global code
*/
// Initialize the main project folder.
app.use(express.static("dist"));

// Set the Express server port.
const port = 8082;

// Spin up the Express server.
app.listen(port, () => console.log(`Listening on port: ${port}`));

// Configure local environment variables (for API key retrieval from the local .env file that is never uploaded to GitHub).
dotenv.config();
// console.log(`Your API key is ${process.env.GEONAMES_API_USERNAME}`); // Debug code.

/*
Routes
*/
// GET route - returns the Webpack built client-side index.html file when the root of the website is requested.
app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

// GET route - returns the requested API key.
app.get("/getapikey", (req, res) => {
  // Note the use of bracket notation below to reference a specific dotenv key/value pair in the process.env object (as loaded from the .env file).
  res.send(process.env[req.query.dotenv]);
  // console.log('Got', process.env[req.query.dotenv]); // Debug code.
});

// GET route - returns projectData API endpoint object's key/value pairs.
app.get("/getdata", (req, res) => {
  res.send(projectData);
  // console.log('Got', projectData); // Debug code.
});

// POST route - sets projectData API endpoint object's key/value pairs.
app.post("/postdata", (req, res) => {
  const data = req.body;

  // Use dot notation to add key/value pairs from our POST request's body to our endpoint object.
  projectData.destinationName = data.destinationName;
  projectData.arrivalDate = data.arrivalDate;
  projectData.regionName = data.regionName;
  projectData.countryName = data.countryName;
  projectData.latitude = data.latitude;
  projectData.longitude = data.longitude;
  projectData.population = data.population;
  projectData.arrivalCountdown = data.arrivalCountdown;
  projectData.weatherData = data.weatherData;
  projectData.destinationImageURL = data.destinationImageURL;

  res.send(projectData);
  // console.log('Posted', projectData); // Debug code.
});

/*
Exports
*/
module.exports = app; // Export for Jest testing only.
