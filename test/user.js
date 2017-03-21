import superagent from 'supertest';
import app from '../app';

function request() {
  return superagent(app.listen());
}

describe('Routes', () => {
  describe('GET /users', () => {
    it('should return 200', (done) => {
      request()
          .get('/users')
          .expect(200, done);
    });
  });
  describe('GET /users/not_found', () => {
    it('should return 404', (done) => {
      request()
          .get('/users/not_found')
          .expect(404, done);
    });
  });
});