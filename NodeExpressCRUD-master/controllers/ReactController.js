var mongoose = require("mongoose");
var ReactModel = require("../models/ReactModel");

var reactController = {};

// list of rectmodel
reactController.list = function(req, res) {
  ReactModel.find({}).exec(function (err, rectmodels) {
    if (err) {
      console.log("Error:", err);
    }
    else {
       res.send(JSON.stringify(rectmodels));
    }
  });
};

// Save employee
reactController.save = function(req, res) {
  var rectmodel = new ReactModel(req.body);

  rectmodel.save(function(err) {
    if(err) {
      console.log(err);
      res.send({
       "code":400,
       "failed":"error ocurred"
     })
    } else {
     res.send({
       "code":200,
       "success":"user registered sucessfully"
         });
    }
  });
};

reactController.getUserByEmail = (email, callback) => {
  let Obj = {userid: email}
  ReactModel.findOne({}).exec(function (err, Obj) {
    if (err) {
      console.log("Error:", err);
    }
    else {
       callback.send(JSON.stringify(Obj));
    }
  });

}


module.exports = reactController;
