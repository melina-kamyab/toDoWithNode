const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 1,
    maxlength: 30,
    lowercase: true,
    require: true,
  },
  date: {type: Date, default: Date.now},
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
