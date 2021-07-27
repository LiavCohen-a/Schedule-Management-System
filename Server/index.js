const express = require('express')
const app = express();
const userController = require("./Controller/usersController")
const todoController = require("./Controller/todoController")
const postsController = require("./controller/postController")

require('./config/database')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());
var cors = require("cors");
app.use(cors());
app.use("/api/users",userController);
app.use("/api/todos",todoController);
app.use("/api/posts",postsController);

app.listen(5000)
console.log("serverRUns")