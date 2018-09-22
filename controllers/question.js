const express = require('express');
const bodyParser = require('body-parser');
const pool = require('../models/db');
const { getAll, getSingleQuestion, editQuestion } = require('../models/dbHelper');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

exports.getAllQuestions = (req, res) => {
  getAll('questions', req, res);
};


exports.getSingleQuestion = (req, res) => {
  const questionId = req.params.q_id;
  getSingleQuestion('questions', 'answers', req, res, questionId);
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
  pool.connect((err, client, done) => {
    const data = {
      questionId: req.params.q_id,
    };

    const query = 'DELETE FROM questions WHERE question_id = $1 ';
    const values = [data.questionId];
    client.query(query, values, (error, result) => {
      done();
      if (error) {
        res.status(400).json({ error });
      }
      res.status(201).json({ deletedQuestion: result });
    });
  });
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
