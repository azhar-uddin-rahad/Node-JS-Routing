const mongoose = require("mongoose");
const { Schema } = mongoose;
const todoSchema = new Schema({
  name: String,
  age: Number,
});
module.exports = mongoose.model("Task", todoSchema);
