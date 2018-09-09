const express = require('express');
const bodyParser = require('body-parser');
const pool = require('../models/db');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// const pool = require('../models/db');


// users controller
exports.getAllUsers = (req, res) => {
  pool.connect((err, client, done) => {
    if (err) {
      console.log(`Can not connect to the DB  ${err}`);
    }
    console.log('connected to database');
    client.query('SELECT * FROM users', (error, result) => {
      done();
      if (err) {
        console.log(error);
        res.status(400).send(error);
      }
      res.status(200).json({
        status: 'success',
        message: 'users fetched successfully',
        users: result.rows,
      });
    });
  });
};

exports.getUserDetails = (req, res) => {
  pool.connect((err, client, done) => {
    if (err) {
      console.log(`Can not connect to the DB  ${err}`);
    }
    console.log('connected to database');
    const userId = req.params.u_id;
    client.query('SELECT * FROM users where user_id = $1', [userId], (error, result) => {
      done();
      if (err) {
        console.log(error);
        res.status(400).send(error);
      }
      res.status(200).json({
        status: 'success',
        message: 'user fetched successfully',
        user: result.rows,
      });
    });
  });
};

// users question controller
exports.getUserQuestions = (req, res) => {
  pool.connect((err, client, done) => {
    if (err) {
      console.log(`Can not connect to the DB  ${err}`);
    }
    console.log('connected to database');
    const userId = req.params.u_id;
    client.query('SELECT * FROM questions where user_id = $1', [userId], (error, result) => {
      done();
      if (err) {
        console.log(error);
        res.status(400).send(error);
      }
      res.status(200).json({
        status: 'success',
        message: 'user questions fetched successfully',
        questions: result.rows,
      });
    });
  });
};


