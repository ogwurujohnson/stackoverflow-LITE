const express = require('express');
const bodyParser = require('body-parser');
const pool = require('../models/db');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
      res.status(200).json({
        status: 'success',
        message: 'questions fetched successfully',
        questions: result.rows,
      });
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
      res.status(200).json({
        status: 'success',
        message: 'questions fetched successfully',
        question: result.rows,
      });
    });
  });
};

exports.editQuestion = (req, res) => {
  const questionId = req.params.q_id;
  const data = {
    title: req.body.title,
    description: req.body.description,
  };
  pool.connect((err, client, done) => {
    client.query('UPDATE questions SET question_title=$2,question_description=$3 Where question_id = $1', [questionId, data.title, data.description], (error, result) => {
      done();
      if (error) {
        console.log(error);
        res.status(400).send(error);
      }
      res.status(201).json(data);
    });
  });
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
        console.log(error);
        res.status(400).send(error);
      }
      res.status(201).json(result);
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
        console.log(error);
        res.status(400).send(error);
      }
      res.status(201).json(data);
    });
  });
};
