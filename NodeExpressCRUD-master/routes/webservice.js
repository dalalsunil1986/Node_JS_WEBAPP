var express = require('express');
var bodyParser = require("body-parser");
var router = express.Router();
var employee = require("../controllers/WebServiceController.js");

// Get list of all employees
// http://localhost:3000/webservice/
router.get('/', function(req, res) {
  employee.list(req, res);
});

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
