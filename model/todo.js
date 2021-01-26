const mongoose = require("mongoose");

const todoSchema = new Schema({
  name: {String},
  id: {Number},
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports(Todo);
