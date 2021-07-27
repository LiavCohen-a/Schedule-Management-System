const mongoose = require("mongoose");

let postSchema = mongoose.Schema;


let post = new postSchema({
  id : String,
  userID : String,
  title: String,
  body : String,
});

module.exports = mongoose.model("posts",post)
