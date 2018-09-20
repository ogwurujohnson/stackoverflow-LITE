const pg = require('pg');
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

let myDatabase;

if (process.env.NODE_ENV === 'development') {
  myDatabase = process.env.DEVPOSTGRES_DB;
} else if (process.env.NODE_ENV === 'test') {
  myDatabase = 'travis';
} else if (process.env.NODE_ENV === 'production') {
  myDatabase = process.env.POSTGRES_DB;
}

const config = {
  user: process.env.POSTGRES_USER,
  database: myDatabase,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('connected to the db');
});

/**
 * Create Tables
 */
const createTables = () => {
  const userTable = `CREATE TABLE IF NOT EXISTS
      users(
        user_id UUID PRIMARY KEY,
        firstname VARCHAR(128) NOT NULL,
        lastname VARCHAR(128) NOT NULL,
        email VARCHAR(128) NOT NULL,
        password VARCHAR(128) NOT NULL,
        role VARCHAR(128) NOT NULL,
        created_date TIMESTAMP,
        modified_date TIMESTAMP
      )`;
  const questionTable = `CREATE TABLE IF NOT EXISTS
      questions(
        question_id UUID PRIMARY KEY,
        question_title VARCHAR(128) NOT NULL,
        question_description VARCHAR(1500) NOT NULL,
        user_id INT NOT NULL
      )`;
  const answerTable = `CREATE TABLE IF NOT EXISTS
      answers(
        answer_id UUID PRIMARY KEY,
        question_id INT NOT NULL,
        answer_description VARCHAR(1000) NOT NULL,
        user_id INT NOT Null
      )`;
  const replyTable = `CREATE TABLE IF NOT EXISTS
      replies(
        reply_id UUID PRIMARY KEY,
        answer_id INT NOT NULL,
        user_id INT NOT NULL
      )`;
  pool.query(userTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
  pool.query(answerTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
  pool.query(replyTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
  pool.query(questionTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/**
 * Drop Tables
 */
const dropTables = () => {
  const queryText = 'DROP TABLE IF EXISTS reflections';
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createTables,
  dropTables,
  pool,
};

require('make-runnable');