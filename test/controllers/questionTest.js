require('dotenv').config();

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index'); // Our app

const should = chai.should();

chai.use(chaiHttp);

const users = require('../testInfo'); // test users

let userToken;


describe('Questions', () => {
  describe('/GET questions', () => {
    it('should return response status 200', (done) => {
      chai.request(app)
        .get('/api/v1/questions')
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('it should return an array of questions', (done) => {
      chai.request(app)
        .get('/api/v1/questions')
        .end((err, res) => {
          if (err) done(err);
          res.body.should.have.property('data');
          res.body.data.should.be.a('array');
          done();
        });
    });
  });

  describe('/GET questions/q_id', () => {
    it('it should return response 200', (done) => {
      chai.request(app)
        .get('/api/v1/questions/1')
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('it should return a single question', (done) => {
      chai.request(app)
        .get('/api/v1/questions/1')
        .end((err, res) => {
          if (err) done(err);
          res.body.should.have.property('parentData');
          res.body.should.have.property('childData');
          res.body.parentData.should.be.a('array');
          res.body.childData.should.be.a('array');
          done();
        });
    });
  });

  describe('/POST questions', () => {
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
      const data = {
        title: 'Test Title',
        description: 'Test Description',
        userId: 1,
      };
      chai.request(app)
        .post('/api/v1/questions')
        .set('Authorization', `Bearer ${userToken}`)
        .send(data)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(201);
          res.body.should.have.property('newQuestion');
          done();
        });
    });
  });

  describe('/DELETE Questions/q_id', () => {
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
        .delete('/api/v1/questions/6')
        .set('Authorization', `Bearer ${userToken}`)
        .send(
          {
            questionId: 1,
          },
        )
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(201);
          res.body.should.have.property('deletedResource');
          done();
        });
    });
  });

  describe('/PUT  Questions/q_id', () => {
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
      const data = {
        title: 'TEST edit',
        description: 'TEST description',
      };
      chai.request(app)
        .put('/api/v1/questions/1')
        .set('Authorization', `Bearer ${userToken}`)
        .send(data)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(201);
          res.body.should.have.property('editedQuestion');
          done();
        });
    });
  });
});
