var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
// load mongoodb db connection
require("./app_server/models/db");

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var budayaRouter = require('./app_server/routes/budaya');
var usersRouter = require('./app_server/routes/user');
var eventRouter = require('./app_server/routes/event');
var daftarEventRouter = require("./app_server/routes/daftarEvent")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/budaya', budayaRouter);
app.use('/user', usersRouter);
app.use('/event', eventRouter);
app.use('/daftarEvent', daftarEventRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server error"
  })
});

module.exports = app;
