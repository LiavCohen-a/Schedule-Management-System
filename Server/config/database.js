const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/tasktodosUsersDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify : false
});
