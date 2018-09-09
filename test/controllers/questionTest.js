const chai = require('chai');
const { expect } = require('chai');

chai.use(require('chai-http'));

const app = require('../../index'); // Our app
const users = require('../testInfo'); // test users

let userToken;


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
});

describe('GET api/v1/questions/:q_id', () => {
  it('should return response status 200', (done) => {
    chai.request(app)
      .get('/api/v1/questions/1')
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res).to.be.an('object');
        done();
      });
  });

  it('it should return a single question and its answers', (done) => {
    chai.request(app)
      .get('/api/v1/questions/1')
      .end((err, res) => {
        if (err) done(err);
        expect(res.body).to.haveOwnProperty('question');
        expect(res.body).to.haveOwnProperty('answers');
        expect(res.body.question).to.be.an('array');
        expect(res.body.answers).to.be.an('array');
        done();
      });
  });
});

describe('POST api/v1/questions', () => {
  before((done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(users.patrick)
      .end((err, res) => {
        if (err) done(err);
        userToken = res.body.token;
        done();
      });
  });

  it('should return status code 201', (done) => {
    chai.request(app)
      .post('/api/v1/questions')
      .set('Authorization', `Bearer ${userToken}`)
      .send(
        {
          title: 'Good title',
          description: 'What is title',
          userId: 1,

        },
      )
      .end((err, res) => {
        if(err) done(err);
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('newQuestion');
        done();
      });
  });
});

/* describe('DELETE api/v1/questions/:q_id', () => {
  before((done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(users.patrick)
      .end((err, res) => {
        if (err) done(err);
        userToken = res.body.token;
        done();
      });
  });

  it('should return status code 201', (done) => {
    chai.request(app)
      .delete('/api/v1/questions/1/delete')
      .set('Authorization', `Bearer ${userToken}`)
      .send(
        {
          questionId: 1,
        },
      )
      .end((err, res) => {
        if(err) done(err);
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('deletedQuestion');
        done();
      });
  });
}); */
/* it('should return Not Found', () => {
    chai.request(app)
      .get('/INVALID_PATH')
      .then((res) => {
        throw new Error('Path exists!');
      })
      .catch((err) => {
        expect(err).to.have.status(404);
      });
  }); */