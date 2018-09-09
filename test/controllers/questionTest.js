

const chai = require('chai');
const { expect } = require('chai');

chai.use(require('chai-http'));

const app = require('../../index'); // Our app

describe('GET api/v1/questions', () => {
  it('should return response status 200', (done) => {
    chai.request(app)
      .get('/api/v1/questions')
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res).to.be.an('object');
        done();
      });
  });

  it('should return an array of questions', (done) => {
    chai.request(app)
      .get('/api/v1/questions')
      .end((err, res) => {
        if (err) done(err);
        expect(res.body).to.haveOwnProperty('questions');
        expect(res.body.questions).to.be.an('array');
        done();
      });
  });

  it('should return Not Found', () => {
    chai.request(app)
      .get('/INVALID_PATH')
      .then(function(res) {
        throw new Error('Path exists!');
      })
      .catch(function(err) {
        expect(err).to.have.status(404);
      });
  });
  
});