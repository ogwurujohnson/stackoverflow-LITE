// const bodyParser = require('body-parser');
const pool = require('../models/db');

exports.postAnswer = (req, res) => {
  pool.connect((err, client, done) => {
    const data = {
      questionId: req.params.q_id,
      description: req.body.description,
      userId: req.body.userId,
    };

    const query = 'INSERT INTO answers(question_id,answer_description, user_id) VALUES($1, $2, $3) RETURNING *';
    const values = [data.questionId, data.description, data.userId];

    client.query(query, values, (error, result) => {
      done();
      if (error) {
        console.log(error);
        res.status(400).send(error);
      }
      res.status(200).json(data);
    });
  });
};

exports.getQuestionAnswers = (req, res) => {
  const questionId = req.params.q_id;
  pool.connect((err, client, done) => {
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
  const answerId = req.params.a_id;
  const data = {
    description: req.body.description,
    userId: req.body.userId,
  };
  pool.connect((err, client, done) => {
    client.query('UPDATE questions SET answer_description=$2,user_id=$3 Where answer_id = $1', [answerId, data.description, data.userId], (error, result) => {
      done();
      if (error) {
        console.log(error);
        res.status(400).send(error);
      }
      res.status(200).json(data);
    });
  });
  res.json({ message: 'edit answer' });
};

exports.deleteAnswer = (req, res) => {
  res.json({ message: 'delete answer' });
};

exports.replyAnswer = (req, res) => {
  res.json({ message: 'reply to an answer' });
};

exports.getAllReply = (req, res) => {
  const answerId = req.params.a_id;
  const questionId = req.params.q_id;
  pool.connect((err, client, done) => {
    client.query('SELECT * FROM answers WHERE answer_id = $1 && question_id = $2', [answerId, questionId], (error, result) => {
      done();
      if (error) {
        console.log(error);
        res.status(400).send(error);
      }
      res.status(200).send(result.rows);
    });
  });
};

exports.upVoteAnswer = (req, res) => {
  res.json({ message: 'up-vote an answer' });
};

exports.downVoteAnswer = (req, res) => {
  res.json({ message: 'down-vote an answer' });
};
