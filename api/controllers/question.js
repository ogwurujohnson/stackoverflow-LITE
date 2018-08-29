// const bodyParser = require('body-parser');
const db = require('../models/db');

exports.getAllQuestions = (req, res, next) => {
  db.any('select * from users')
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved All Questions',
        });
    })
    .catch((err) => { return next(err); });
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
