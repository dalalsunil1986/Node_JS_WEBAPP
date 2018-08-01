var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
var expressValidator = require('express-validator');
var session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var flash = require('connect-flash');
var emitter = require('events').EventEmitter;
var cors = require('cors')   // use for cross origin when call any api from different domain like from angular controller


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/employee')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var index = require('./routes/index');
var users = require('./routes/users');
var employees = require('./routes/employees');
var webservice = require('./routes/webservice');
var react      = require('./routes/reactrouter');
var student = require('./routes/student');

var app = express();

// for cross origin 
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));//
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(expressSession({secret: 'mySecretKey'}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(passport.initialize());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(expressValidator());

app.use(flash());

app.use(function(req, res, next){
  res.locals.success_message = req.flash('success_message');
  res.locals.error_message = req.flash('error_message');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
    next();
});

app.use('/', index);
app.use('/users', users);
app.use('/employees', employees);
app.use('/webservice',webservice);
app.use('/react',react);
app.use('/student',student);     // angular router

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
