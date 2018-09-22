const pool = require('../models/db');

exports.getAll = (tableName, req, res) => {
  pool.connect((err, client, done) => {
    if (err) {
      console.log(err);
    }
    console.log('connected to db successfully');
    const query = `SELECT * FROM ${tableName}`;
    client.query(query, (error, result) => {
      done();
      if (err) {
        res.status(400).json({ error });
      }
      if (result < '1') {
        res.status(404).json({
          status: 'failed',
          message: 'Resource not found',
        });
      } else {
        res.status(200).json({
          status: 'success',
          message: 'Resources fetched successfully',
          data: result.rows,
        });
      }
    });
  });
  return tableName;
};

exports.getSingleQuestion = (questionTable, answerTable, req, res, id) => {
  const QuestionValue = id;
  const QuestionQuery = `SELECT * FROM ${questionTable} WHERE question_id = $1`;
  pool.connect((err, client, done) => {
    client.query(QuestionQuery, [QuestionValue], (error, result) => {
      done();
      if (error) {
        res.status(400).send({ error });
      }
      if (result.rows < '1') {
        res.status(404).send({
          status: 'failure',
          message: 'question not found',
        });
      } else {
        const fetchedQuestion = result.rows[0].question_id;
        const AnswerQuery = `SELECT * FROM ${answerTable} WHERE question_id = $1`;
        const AnswerValue = fetchedQuestion;
        client.query(AnswerQuery, [AnswerValue], (answerError, answers) => {
          done();
          if (answerError) {
            res.status(400).send({ answerError });
          }
          res.status(200).json({
            status: 'success',
            message: 'question fetched successfully',
            question: result.rows,
            answers: answers.rows,
          });
        });
      }
    });
  });
};

exports.getSingle = (tableName, resourceId, resourceLocation, req, res) => {
  const resourceValue = resourceId;
  const resourceQuery = `SELECT * FROM ${tableName} WHERE ${resourceLocation} = $1 `;
  pool.connect((err, client, done) => {
    client.query(resourceQuery, [resourceValue], (error, result) => {
      done();
      if (error) {
        res.status(400).send({ error });
      }
      if (result.rows < '1') {
        res.status(404).json({
          status: 'failed',
          message: 'Resource not found',
        });
      } else {
        res.status(200).json({
          status: 'success',
          message: 'Resource fetched successfully',
          data: result.rows,
        });
      }
    });
  });
};

exports.editQuestion = (tableName, id, data, res) => {
  const query = `UPDATE ${tableName} SET question_title=$2,question_description=$3 WHERE question_id = $1`;
  const values = [id, data.title, data.description];
  pool.connect((err, client, done) => {
    client.query(query, values, (error, result) => {
      done();
      if (error) {
        res.status(400).send(error);
      }
      res.status(201).json({ editedQuestion: data });
    });
  });
};
