const express = require('express');
const bodyParser = require('body-parser');
const pool = require('../models/db');
const {
  deleteResource, postAnswer, editAnswer, upVote, downVote, accepter, postReply,
} = require('../models/dbHelper');

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

exports.upVoteAnswer = (req, res) => {
  const data = {
    answerId: req.params.a_id,
  };
  upVote('answers', data.answerId, res);
};

exports.downVoteAnswer = (req, res) => {
  const data = {
    answerId: req.params.a_id,
  };
  downVote('answers', data.answerId, res);
}; 

/* exports.acceptAnswer = (req, res) => {
  const data = {
    answerId: req.params.a_id,
  };
  accepter('answers', data.answerId, res);
}; */

exports.replyAnswer = (req, res) => {
  const data = {
    answerId: req.params.a_id,
    userId: req.body.userId,
    description: req.body.description,
  };
  postReply(data, res);
};
