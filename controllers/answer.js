const express = require('express');
const bodyParser = require('body-parser');
const pool = require('../models/db');
const { deleteResource, postAnswer, editAnswer } = require('../models/dbHelper');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


exports.postAnswer = (req, res) => {
  const data = {
    questionId: req.params.q_id,
    description: req.body.description,
    userId: req.body.userId,
  };

  postAnswer(data, res);
};


exports.editAnswer = (req, res) => {
  const answerId = req.params.a_id;
  const data = {
    description: req.body.description,
    userId: req.body.userId,
  };
  editAnswer(data, answerId, res);
};

exports.deleteAnswer = (req, res) => {
  const data = {
    answerId: req.params.a_id,
  };
  deleteResource('answers', data.answerId, 'answer_id', res);
};

exports.replyAnswer = (req, res) => {
  res.json({ message: 'reply to an answer' });
};


exports.upVoteAnswer = (req, res) => {
  res.json({ message: 'up-vote an answer' });
};

exports.downVoteAnswer = (req, res) => {
  res.json({ message: 'down-vote an answer' });
};

exports.acceptAnswer = (req, res) => {
  res.json({ message: 'answer accepted' });
};
