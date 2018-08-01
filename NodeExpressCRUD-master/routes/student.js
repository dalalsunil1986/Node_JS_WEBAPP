var express = require('express');
var bodyParser = require("body-parser");
var router = express.Router();
var student = require("../controllers/StudentController.js");

// display angular js page
router.get('/', function(req, res, next) {
	 res.render("../views/student/index");
});

// Create employee
router.get('/create', function(req, res) {
  student.create(req, res);
});


// display angular js page
router.get('/list', function(req, res, next) {
	 student.list(req,res);
});

router.post('/save', function(req, res) {
	console.log("angular data : "+ req.body.lastName);
	student.save(req,res);
});

module.exports = router;