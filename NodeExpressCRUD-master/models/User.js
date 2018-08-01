var mongoose = require('mongoose');
var passport = require('passport');

let UserSchema = mongoose.Schema({
	name:{
  		type: String,
  		index: true
  	},
  	email:{
  		type: String
  	},
  	password:{
  		type: String
  	},
    profile:{
      type: String
    }
});

module.exports = mongoose.model('User', UserSchema);

