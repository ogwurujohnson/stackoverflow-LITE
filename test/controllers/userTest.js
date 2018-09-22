require('dotenv').config();

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = require('chai').should();

chai.use(require('chai-http'));

const app = require('../../index'); // Our app
const users = require('../testInfo'); // test users

let personalToken;

describe('USERS', () => {
  describe('GET api/v1/users', () => {
    it('should return response 200', (done) => {
      chai.request(app)
        .get('/api/v1/users')
        .end((err, res) => {
          if (err) done(err);
          res.should.has.status(200);
          res.should.be.a('object');
          done();
        });
    });
    it('should return an array of users', (done) => {
      chai.request(app)
        .get('/api/v1/users')
        .end((err, res) => {
          if (err) done(err);
          res.body.should.have.property('data');
          res.body.data.should.be.a('array');
          done();
        });
    });
  });
  describe('GET api/v1/users/:u_id', () => {
    it('should return response status 200', (done) => {
      chai.request(app)
        .get('/api/v1/users/1')
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
    it('it should return a single user', (done) => {
      chai.request(app)
        .get('/api/v1/users/1')
        .end((err, res) => {
          if (err) done(err);
          res.body.should.have.property('data');
          // res.body.should.have.property('questions');
          res.body.data.should.be.a('array');
          // res.body.questions.should.be.a('array');
          done();
        });
    });
  });
});
