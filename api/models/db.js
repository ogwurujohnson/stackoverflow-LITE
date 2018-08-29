const pg = require('pg');

const conn = 'postgres://stack_user:Johnny55@localhost/stackoverflow';

const client = new pg.Client(conn);
client.connect();
console.log('Connected to postgreSQL database');

module.exports = client;
