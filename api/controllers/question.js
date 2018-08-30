// const bodyParser = require('body-parser');
const pg = require('pg');

const conString = process.env.POSTGRES_CONNECTION_URL;


exports.getAllQuestions = (req, res) => {
  pg.Connection(conString, (err, client, done) => {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    console.log('connected to database');
    client.query('SELECT * FROM questions', (error, result) => {
      done();
      if (error) {
        return console.error('error running query', error);
      }
      res.send(result);
    });
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
