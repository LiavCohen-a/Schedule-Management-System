const mongoose = require("mongoose");

let userSchema = mongoose.Schema;


let user = new userSchema({
  id : String,
  name: String,
  email: String,
  city: String,
  street: String,
  zipCode: Number
});

module.exports = mongoose.model("users",user)
