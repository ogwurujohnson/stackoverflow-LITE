const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const pool = require('../models/db');


// controller for user signup
exports.addUser = (req, res) => {
  const { email } = req.body;
  pool.connect((err, client, done) => {
    // check is user email exists
    client.query('SELECT * FROM users WHERE email = $1', [email], (error, result) => {
      done();
      // if user email exists display message
      if (result.rows >= '1') {
        res.status(409).json({ message: 'user already exists' });
      } else { // if users email doesn't exist go ahead and do insertion
        const { password } = req.body;
        // hash and salt password
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            res.status(400).send(err);
          } else {
            pool.connect((err, client, done) => {
              if (err) {
                console.log(`Connection to db failed ${err}`);
              }

              const data = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hash,
              };
              // insert to db
              const query = 'INSERT INTO users(firstname, lastname, email, password) VALUES($1, $2, $3, $4) RETURNING *';
              const values = [data.firstname, data.lastname, data.email, data.password];
              client.query(query, values, (error, result) => {
                done();
                if (error) {
                  console.log(error);
                  res.status(400).send(error);
                }
                res.status(200).json(data);
              });
            });
          }
        });
      }
    });
  });
};

exports.loginUser = (req, res) => {
  const { email } = req.body;
  pool.connect((err, client, done) => {
    // check to see if user email exists
    client.query('SELECT * FROM users WHERE email = $1', [email], (error, result) => {
      done();
      if (result.rows < '1') {
        res.status(401).json({ message: 'Authentication Failed' });
      } else {
        // if it does use bcrypt to compare supplied password with stored hash
        const { password } = req.body;
        const hash = result.rows[0].password;
        const userEmail = result.rows[0].email;
        const userId = result.rows[0].user_id;
        bcrypt.compare(password, hash, (err, result) => {
          if (result) {
            // create a jwt token using jwt.sign
            const token = jwt.sign({
              userEmail,
              userId,
            },
            // above is the payload, below is your secret key
            process.env.JWT_SECRET_KEY,
            {
              expiresIn: '1h',
            });
            res.status(200).json({ message: 'Authentication Successful', token });
          } else {
            res.status(401).json({ message: 'Authentication Failed' });
          }
        });
      }
    });
  });
};