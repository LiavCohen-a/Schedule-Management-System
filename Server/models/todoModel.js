const mongoose = require("mongoose");

let todoSchema = mongoose.Schema;


let todo = new todoSchema({
  id : String,
  userID : String,
  title: String,
  completed : Boolean
});

module.exports = mongoose.model("todos",todo)
