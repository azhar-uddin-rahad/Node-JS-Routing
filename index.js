const express = require('express');
const app = express();

// Define a route for the root path ("/")
app.get('/', function (req, res) {
  res.send('Hello World');
});

// Start the server on port 88000
app.listen(8000, function() {
  console.log("Server is running on port 8000");
});