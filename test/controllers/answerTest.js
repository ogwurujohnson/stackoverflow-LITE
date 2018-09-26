require('dotenv').config();

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index'); // our app

const should = chai.should();

chai.use(chaiHttp);

const users = require('../testInfo'); // test users

let userToken;


describe('ANSWERS', () => {
  describe('/POST answers', () => {
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
        questionId: 1,
        description: 'Sample answer',
        userId: 1,
      };
      chai.request(app)
        .post('/api/v1/questions/1/answers')
        .set('Authorization', `Bearer ${userToken}`)
        .send(data)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(201);
          res.body.should.have.property('newAnswer');
          done();
        });
    });
  });

  describe('/PUT answers', () => {
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
        description: 'answer test edit',
        userId: 1,
      };
      chai.request(app)
        .put('/api/v1/questions/1/answers/1')
        .set('Authorization', `Bearer ${userToken}`)
        .send(data)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(201);
          res.body.should.have.property('editedAnswer');
          done();
        });
    });

    it('should return status code 201 for upVotes', (done) => {
      chai.request(app)
        .put('/api/v1/questions/1/answers/1/upvote')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(201);
          res.body.should.have.property('message');
          done();
        });
    });

    it('should return status code 201 for downVotes', (done) => {
      chai.request(app)
        .put('/api/v1/questions/1/answers/1/downvote')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(201);
          res.body.should.have.property('message');
          done();
        });
    });

    /* it('should return status code 201 for answer acceptance', (done) => {
      chai.request(app)
        .put('/api/v1/questions/1/answers/1/accept')
        .set('Authorization', `Bearer ${userToken}`)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(201);
          res.body.should.have.property('message');
          done();
        });
    }); */
  });

  describe('/DELETE answers', () => {
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
        .delete('/api/v1/questions/1/answers/2')
        .set('Authorization', `Bearer ${userToken}`)
        .send(
          {
            answerid: 1,
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

  describe('/POST replies', () => {
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
        .post('/api/v1/questions/1/answers/1/reply')
        .set('Authorization', `Bearer ${userToken}`)
        .send(
          {
            answerid: 1,
            userId: 1,
            description: 'test suite reply'
          },
        )
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('newReply');
          done();
        });
    });
  });
}); 

