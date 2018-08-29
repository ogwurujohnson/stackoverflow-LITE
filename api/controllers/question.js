// const bodyParser = require('body-parser');
const client = require('../models/db');

exports.getAllQuestions = (req, res) => {
  const query = client.query('SELECT * from questions;');
  query.on('row', (row, result) => {
    result.addRow(row);
  });
  query.on('end', (result) => {
    const jsonString = JSON.stringify(result.rows);
    const jsonObj = JSON.parse(jsonString);
    res.send(jsonString);
    client.end();
    context.succeed(jsonObj);
  });
};

exports.getSingleQuestion = (req, res) => {
  res.json({ message: 'Single Question' });
};

exports.editQuestion = (req, res) => {
  res.json({ message: 'edit Question' });
};

exports.deleteQuestion = (req, res) => {
  res.json({ message: 'delete question' });
};

exports.postQuestion = (req, res) => {
  res.json({ message: 'ask question' });
};
