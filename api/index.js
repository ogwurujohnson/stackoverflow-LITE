require('dotenv').config();

const express = require('express');
// const bodyParser = require('body-parser');
const logger = require('morgan');


const app = express();
const questionRouter = require('./routes/question');
const userRouter = require('./routes/user');


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

app.get('/v1', (req, res) => {
  res.send('Welcome Boy');
});

app.use('/v1/questions', questionRouter);
app.use('/v1/users', userRouter);


app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

const port = process.env.port || 3000;


app.listen(port, () => {
  console.log(`server listening on port ${port} `);
});
