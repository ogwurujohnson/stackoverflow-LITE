'use strict';

require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();
var questionRouter = require('./routes/question');
var userRouter = require('./routes/user');
var authRouter = require('./routes/auth');

/**
 * ?HINT: For other versions make sure you to uncomment the following code
 * const version-n = require('location of the version-n index.js file');
 * app.use('/v2', version-n);
 * the code in the version-n index.js takes over
 */

/* app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    if (req.method === 'Options') {
        res.header('Access-Control-Allow-Methods', 'GET,PUT, POST, DELETE');
        return res.status(200).json({});
      }
}); */

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1', function (req, res) {
  res.send('Welcome Boy');
});

app.use('/api/v1/question', questionRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/auth', authRouter);

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); //* will allow from all cross domain
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

var port = process.env.port || 3000;

app.listen(port, function () {
  console.log('server listening on port ' + port + ' ');
});