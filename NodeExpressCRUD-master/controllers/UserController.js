var mongoose = require("mongoose");
var User = require("../models/User");
var bcrypt = require('bcryptjs');

var userController = {};

userController.createUser = (newUser, callback) => {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

userController.getUserByEmail = (email, callback) => {
  let Obj = {email: email}
  User.findOne(Obj, callback);
}

userController.comparePassword = (password, hash, callback) => {
  bcrypt.compare(password, hash, function(err, isMatch){
    if(err) throw err;
    callback(null, isMatch);
  });
}

userController.getUserById = (id, callback) => {
    User.findById(id, callback);
}

module.exports = userController;
