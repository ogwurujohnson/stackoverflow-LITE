// const bodyParser = require('body-parser');
const pool = require('../models/db');

exports.getAllQuestions = (req, res) => {
  pool.connect((err, client, done) => {
    if (err) {
      console.log(`Can not connect to the DB  ${err}`);
    }
    console.log('connected to database');
    client.query('SELECT * FROM questions', (error, result) => {
      done();
      if (err) {
        console.log(error);
        res.status(400).send(error);
      }
      res.status(200).send(result.rows);
    });
  });
};

exports.getSingleQuestion = (req, res) => {
  const questionId = req.params.q_id;
  pool.connect((err, client, done) => {
    client.query('SELECT * FROM questions WHERE question_id = $1', [questionId], (error, result) => {
      done();
      if (error) {
        console.log(error);
        res.status(400).send(error);
      }
      res.status(200).send(result.rows);
    });
  });
};

exports.editQuestion = (req, res) => {
  res.json({ message: 'edit Question' });
};

exports.deleteQuestion = (req, res) => {
  res.json({ message: 'delete question' });
};

exports.postQuestion = (req, res) => {
  const data = {
    title: req.body.title,
    description: req.body.description,
  };
  res.json({ message: 'ask question' });
};
