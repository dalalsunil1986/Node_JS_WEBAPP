var mongoose = require("mongoose");
var Student = require("../models/Student");

var studentController = {};

// Show list of employees
studentController.list = function(req, res) {
  Student.find({}).exec(function (err, students) {
    if (err) {
      console.log("Error:", err);
    }
    else {
     // res.render("../views/student/index", {students: students});
      console.log("Sudent List Fetched Successfully.");
      res.send(JSON.stringify(students));
    }
  });
};

// Show employee by id
studentController.show = function(req, res) {
  Student.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/show", {employee: employee});
    }
  });
};

// Create new employee
studentController.create = function(req, res) {
  res.render("../views/student/create");
};

// Save new employee
studentController.save = function(req, res) {
  var student = new Student(req.body);

  student.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/student/create");
    } else {
      console.log("Successfully created an employee.");
      res.send(JSON.stringify(student));
    }
  });
};

// Edit an employee
studentController.edit = function(req, res) {
  Student.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/edit", {employee: employee});
    }
  });
};

// Update an employee
studentController.update = function(req, res) {
  Student.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, employee) {
    if (err) {
      console.log(err);
      res.render("../views/employees/edit", {employee: req.body});
    }
    res.redirect("/employees/show/"+employee._id);
  });
};

// Delete an employee
studentController.delete = function(req, res) {
  Student.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Employee deleted!");
      res.redirect("/employees");
    }
  });
};

module.exports = studentController;
