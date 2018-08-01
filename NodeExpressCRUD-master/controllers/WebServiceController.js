var mongoose = require("mongoose");
var Employee = require("../models/Employee");

var webServiceController = {};

// list of employees
webServiceController.list = function(req, res) {
  Employee.find({}).exec(function (err, employees) {
    if (err) {
      console.log("Error:", err);
    }
    else {
       res.send(JSON.stringify(employees));
    }
  });
};

// Save employee
webServiceController.save = function(req, res) {
  var employee = new Employee(req.body);

  employee.save(function(err) {
    if(err) {
      console.log(err);
    } else {
      res.send(JSON.stringify(employee));
    }
  });
};

// Update an employee
webServiceController.update = function(req, res) {
  Employee.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, employee) {
    if (err) {
      console.log(err);
    }
    res.send(JSON.stringify(req.body));
  });
};

// Delete an employee
webServiceController.delete = function(req, res) {
  Employee.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Employee deleted!");
      res.send({"STATUS":"DELETED"});
    }
  });
};

module.exports = webServiceController;
