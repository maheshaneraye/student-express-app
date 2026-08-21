const request = require('supertest');
const app = require('../src/app');

describe('Student Express App Endpoints', () => {
  it('GET / should return online status', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('online');
    expect(res.body.service).toBe('student-node-express-app');
  });

  it('GET /health should return 200 healthy', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

  it('GET /api/info should return app version and runtime', async () => {
    const res = await request(app).get('/api/info');
    expect(res.statusCode).toBe(200);
    expect(res.body.version).toBe('1.0.0');
  });
});
#test
  
