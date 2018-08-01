# NodeExpressCRUD

This source code is part of Node.js, Express.js, Mongoose and MongoDB CRUD Tutorial https://www.djamware.com/post/58b27ce080aca72c54645983/how-to-create-nodejs-expressjs-and-mongodb-crud-web-application


Application Startup Description : 

1. move to folder inside your application and run command -> "npm start"


Node Modules Description Used in Application : 

1. express
2. path
3. serve-favicon
4. morgan
5. cookie-parser
6. body-parser
7. mongoose
8. nodemon



Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using npm. Just use nodemon instead of node to run your code, and now your process will automatically restart when your code changes.

with out node mon :     "start": "node ./bin/www",
with nodemon : "start": "nodemon ./bin/www --exec babel-node -e js"





=============================================================================================
============================ API DETAIL =====================================================
1. Get List of Employee
 URL : http://localhost:3000/webservice/
 METHOD : GET
 REQUEST : 
 RESPONSE : 
 [{"name":"ASHISH MISHRA","address":"VILL- BITHALPUR, POST - BENIPUR (CHAUREBAZAR","position":"software engineer","salary":50000,"updated_at":"2018-06-11T06:49:08.931Z"}]


2. Save Employee Detail

 URL : http://localhost:3000/webservice/save

 METHOD : POST

 REQUEST : {
 "name":"ashish mishra",
 "address":"jaipur",
 "position":"SE",
 "salary":"45000"
}

 RESPONSE : 
 {"name":"ashish mishra","address":"jaipur","position":"SE","salary":45000,"updated_at":"2018-07-10T07:04:15.328Z"}
 

3. Update Employee Detail
URL : http://localhost:3000/webservice/update/5b445a6f6f64831524855990
METHOD : POST

 REQUEST : {
 "name":"ashish mishra",
 "address":"jaipur",
 "position":"SE",
 "salary":"48000"
}

 RESPONSE : 
 {"name":"ashish mishra","address":"jaipur","position":"SE","salary":"48000"}


4. Delete Employee Detail

URL : http://localhost:3000/webservice/delete/5b445a6f6f64831524855990
METHOD : POST
REQUEST : 
RESPONSE : {
    "STATUS": "DELETED"
}
 










==============================================================================================






/////// FILE WRITE OPERATION //////////////////////////////////////////////
fs.writeFile('from.txt', 'this is test demo for file writting', function (err) {
    if (err) {
        return console.log(err);
      }else {
        console.log('Write operation complete.');
      }
      
    
});

/////// FILE APPEND OPERATION ///////////////////////////
fs.appendFile('from.txt', 'Hello World!', function (err) { 
    if (err)
        console.log(err);
    else
        console.log('Append operation complete.');
});


/////////////  READ FILE IN ASYNC MODE ////////////
fs.readFile("from.txt", 'utf8',function(err,data){
   if (err) 
        return console.log(err);
    console.log(data);
});

/////////////  READ FILE IN SYNC MODE ////////////
var data = fs.readFileSync('from.txt', 'utf8');
console.log(data);

/////////////  DELETE FILE ////////////
fs.unlink('from.txt', function () {
    
    console.log('delete operation complete.');
 
});

//////////////////////////////////////////////////
///////////////// EVENT HANDELING ////////////////

function LoopProcessor(num) {
    var e = new emitter();
    
    setTimeout(function () {
        
        for (var i = 1; i <= num; i++) {
            e.emit('BeforeProcess', i);
            
            console.log('Processing number:' + i);
            
            e.emit('AfterProcess', i);
        }
    }
    , 2000)
    
    return e;
}
var lp = LoopProcessor(3);
 
lp.on('BeforeProcess', function (data) {
    console.log('About to start the process for ' + data);
});
 
lp.on('AfterProcess', function (data) {
    console.log('Completed processing ' + data);
});

/////////////////////////////////////////////////