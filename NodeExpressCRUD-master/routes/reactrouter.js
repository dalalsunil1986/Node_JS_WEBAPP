var express = require('express');
var passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
var bodyParser = require("body-parser");
var router = express.Router();
var employee = require("../controllers/ReactController.js");

// Get list of all employees
// http://localhost:3000/webservice/
router.get('/', function(req, res) {
  employee.list(req, res);
});

router.post('/', passport.authenticate('local', 
	function(req, res){
		req.flash('success_message', 'You are now Logged in!!');
	}
));

passport.use(new LocalStrategy({
	usernameField: 'email',
	passReqToCallback : true
},
	function(req, email, done) {
		employee.getUserByEmail(email, function(err, user) {
			if (err) { return done(err); }
	  		if (!user) {
				return done(null, false, req.flash('error_message', 'No email is found'));
	  		}
		});
  	}
));

// Save employee
router.post('/save', function(req, res) {
  employee.save(req, res);
});

// Edit update
router.post('/update/:id', function(req, res) {
  employee.update(req, res);
});

// Edit update
router.post('/delete/:id', function(req, res, next) {
  employee.delete(req, res);
});

module.exports = router;
