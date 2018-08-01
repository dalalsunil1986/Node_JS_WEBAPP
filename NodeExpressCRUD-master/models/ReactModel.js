var mongoose = require('mongoose');

var ReactSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  userid: String,
  password: String,
  role: String,
});

module.exports = mongoose.model('ReactModel', ReactSchema);
