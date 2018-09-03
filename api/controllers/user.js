const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const express = require('express');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const pool = require('../models/db');


// users controller
exports.getAllUsers = (req, res) => {
  res.json({ message: 'All Users' });
};

exports.getUserDetails = (req, res) => {
  res.json({ message: 'Logged User details' });
};

// users question controller
exports.getUserQuestions = (req, res) => {
  res.json({ message: 'user centric questions' });
};

exports.getUserSingleQuestion = (req, res) => {
  res.json({ message: 'users single view of their question' });
};

exports.addUser = (req, res) => {
  const email = req.body.email;
  pool.connect((err, client, done) => {
    client.query('SELECT * FROM users WHERE email = $1', [email], (error, result) => {
      done();
      if(result.rows >= '1'){
        res.status(409).json({error: "user already exists"});
      }
      else{
        const password = req.body.password;
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          res.status(400).send(err);
        } else{ 
          console.log(hash);
          pool.connect((err, client, done) => {
            if (err) {
              console.log(`Connection to db failed ${err}`);
            }
            const data = {
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              email: email,
              password: hash,
            };
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
  res.json({ message: 'user logged in' });
};
