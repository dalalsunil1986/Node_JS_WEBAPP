var mongoose = require('mongoose');
var passport = require('passport');

let StudentSchema = mongoose.Schema({
	firstName:{
  		type: String,
  		index: true
  	},
  	lastName:{
  		type: String
  	},
  	DoB:{
  		type: Date
  	},
    gender:{
      type: String
    },
    trainingType:{
      type: String
    },
    maths : {
      type: Boolean
    },
    physics : {
      type: Boolean
    },
    chemistry : {
      type: Boolean
    }
});

module.exports = mongoose.model('Student', StudentSchema);

