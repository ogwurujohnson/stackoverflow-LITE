const pg = require('pg');

/* const conn = 'postgres://stack_user:Johnny55@localhost/stackoverflow';

const client = new pg.Client(conn);
client.connect();
console.log('Connected to postgreSQL database');

module.exports = client; */

const config = {
  user: 'stack_user',
  database: 'stackoverflow',
  password: 'Johnny55',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
};
const pool = new pg.Pool(config);

pool.connect((err, client, done) => {
  if (err) {
    console.log(`not able to get connection ${err}`);
  } else {
    console.log('connection established');
  }
});

module.exports = pool;
