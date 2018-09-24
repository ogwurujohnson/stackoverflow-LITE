const express = require('express');
const bodyParser = require('body-parser');
const pool = require('../models/db');
const { getAll, getSingle, editQuestion, deleteResource } = require('../models/dbHelper');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

exports.getAllQuestions = (req, res) => {
  getAll('questions', req, res);
};


exports.getSingleQuestion = (req, res) => {
  const questionId = req.params.q_id;
  getSingle('questions', 'answers', questionId, 'question_id', 'question_id', res);
};


exports.editQuestion = (req, res) => {
  const questionId = req.params.q_id;
  const data = {
    title: req.body.title,
    description: req.body.description,
  };
  editQuestion('questions', questionId, data, res);
};


// didn't work because of foreign key issues
exports.deleteQuestion = (req, res) => {
  // DELETE FROM tbltravellers WHERE memo_serial='$pnr'
  const data = {
    questionId: req.params.q_id,
  };
  deleteResource('questions', data.questionId, 'question_id', res);
};

exports.postQuestion = (req, res) => {
  pool.connect((err, client, done) => {
    const data = {
      title: req.body.title,
      description: req.body.description,
      userId: req.body.userId,
    };

    const query = 'INSERT INTO questions(question_title,question_description,user_id) VALUES($1, $2, $3) RETURNING *';
    const values = [data.title, data.description, data.userId];

    client.query(query, values, (error, result) => {
      done();
      if (error) {
        res.status(400).send(error);
      }
      res.status(201).json({
        newQuestion: data,
      });
    });
  });
};
