const express = require('express');
const bodyParser = require('body-parser');
const pool = require('../models/db');
const {
  getAll, getSingle, editQuestion, deleteResource, postQuestion,
} = require('../models/dbHelper');

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
  const data = {
    title: req.body.title,
    description: req.body.description,
    userId: req.body.userId,
  };

  postQuestion(data, res);
};
