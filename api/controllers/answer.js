// const bodyParser = require('body-parser');
const pool = require('../models/db');

exports.postAnswer = (req, res) => {
  res.json({ message: 'posted answer' });
};

exports.getQuestionAnswers = (req, res) => {
  pool.connect((err, client, done) => {
    const questionId = req.params.q_id;
    client.query('SELECT * FROM answers WHERE question_id = $1', [questionId], (error, result) => {
      done();
      if (error) {
        console.log(error);
        res.status(400).send(error);
      }
      res.status(200).send(result.rows);
    });
  });
};

exports.editAnswer = (req, res) => {
  res.json({ message: 'edit question' });
};

exports.deleteAnswer = (req, res) => {
  res.json({ message: 'delete answer' });
};

exports.replyAnswer = (req, res) => {
  res.json({ message: 'reply to an answer' });
};

exports.getAllReply = (req, res) => {
  res.json({ message: 'all replies to answer' });
};

exports.upVoteAnswer = (req, res) => {
  res.json({ message: 'up-vote an answer' });
};

exports.downVoteAnswer = (req, res) => {
  res.json({ message: 'down-vote an answer' });
};
