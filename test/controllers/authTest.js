require('dotenv').config();

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index'); // our app

chai.should();

chai.use(chaiHttp);


describe('Authentication', () => {
  describe('/SIGNUP', () => {
    it('should return status 200', (done) => {
      const data = {
        firstname: 'Jay',
        lastname: 'testboy',
        email: 'jay@tester.com',
        password: 'test',
        role: 'tester',
      };
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(data)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('/LOGIN', () => {
    it('should retrun status 200', (done) => {
      const data = {
        email: 'test@gmail.com',
        password: 'test',
      };
      chai.request(app)
        .post('/api/v1/auth/login')
        .send(data)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('firstname');
          res.body.should.have.property('lastname');
          res.body.should.have.property('role');
          done();
        });
    });
  });
});
