const express = require("express");
const app = express();
app.use(express.json());
const routes = require("./route");
const routes2=require("./route2")
const mongoose = require('mongoose');
// Define a route for the root path ("/")
mongoose.connect(`mongodb+srv://test_2024:0yaajY4aqUD7kaiP@cluster0.jmnkad8.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log('Connected!'));


app.use(routes);
app.use(routes2)
app.get("/", function (req, res) {
  res.send("Hello World");
});

// Start the server on port 88000
app.listen(8000, function () {
  console.log("Server is running on port 8000");
});
