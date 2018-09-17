const pool = require('../models/db');

exports.getAll = (tablename, req, res) => {
  pool.connect((err, client, done) => {
    if (err) {
      console.log(err);
    }
    console.log('connected to db successfully');
    const query = `SELECT * FROM ${tablename}`;
    client.query(query, (error, result) => {
      done();
      if (err) {
        res.status(400).json({ error });
      }
      res.status(200).json({
        status: 'success',
        message: 'questions fetched successfully',
        questions: result.rows,
      });
    });
  });
};

getSingle = ()
