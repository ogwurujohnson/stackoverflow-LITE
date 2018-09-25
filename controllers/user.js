const express = require('express');
const bodyParser = require('body-parser');

const { getSingle, getAll, getExclusiveSingle, deleteAll } = require('../models/dbHelper');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// const pool = require('../models/db');


// users controller
exports.getAllUsers = (req, res) => {
  getAll('users', req, res);
};


exports.getUserDetails = (req, res) => {
  const userId = req.params.u_id;
  getSingle('users', 'questions', userId, 'user_id', 'user_id', res);
};

// users question controller
exports.getUserQuestions = (req, res) => {
  const userId = req.params.u_id;
  getExclusiveSingle('questions', userId, 'user_id', res);
};

exports.getUserAnswers = (req, res) => {
  const userId = req.params.u_id;
  getExclusiveSingle('answers', userId, 'user_id', res);
};
