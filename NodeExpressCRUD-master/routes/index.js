var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({storage: storage});

// file upload from postman ///////////////////////////////////////////
//http://localhost:3000/fileUpload { form-data : image - choose file }
router.post('/fileUpload', upload.single('image'), (req, res, next) => {
    //MongoClient.connect(url, (err, db) => {
      //  assert.equal(null, err);
        //insertDocuments(db, './public/' + req.file.filename, () => {
        //    db.close();
            res.json({'message': 'File uploaded successfully'});
        //});
    //});
});


var insertDocuments = function(db, filePath, callback) {
    var collection = db.collection('user');
    collection.insertOne({'imagePath' : filePath }, (err, result) => {
        assert.equal(err, null);
        callback(result);
    });
}
 ///////////////////////////////////////////////////////////////////////

 
// index controller =============================
router.get('/', isLoggedIn, function(req, res){
  	res.render('pages/index');
});

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
        next();
	}
	else{
        res.redirect("/users/login");
    }
}

module.exports = router;
