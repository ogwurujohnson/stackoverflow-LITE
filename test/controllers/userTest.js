/* const chai = require('chai');
const { expect } = require('chai');

chai.use(require('chai-http'));

const app = require('../../index'); // Our app
const users = require('../testInfo'); // test users

let personalToken;

describe('GET api/v1/users', () => {
  it('should return response 200', (done) => {
    chai.request(app)
      .get('/api/v1/users')
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res).to.be.an('object');
        done();
      });
  });

  it('should return an array of users', (done) => {
    chai.request(app)
      .get('/api/v1/users')
      .end((err, res) => {
        if (err) done(err);
        expect(res.body).to.haveOwnProperty('users');
        expect(res.body.users).to.be.an('array');
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
        expect(res).to.have.status(200);
        expect(res).to.be.an('object');
        done();
      });
  });

  it('it should return a single user', (done) => {
    chai.request(app)
      .get('/api/v1/users/1')
      .end((err, res) => {
        if (err) done(err);
        expect(res.body).to.haveOwnProperty('user');
        expect(res.body).to.haveOwnProperty('questions');
        expect(res.body.user).to.be.an('array');
        expect(res.body.questions).to.be.an('array');
        done();
      });
  });
}); */
