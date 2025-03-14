const request = require('supertest');
const app = require('./index');

test('GET / should return Hello, DevOps!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, DevOps!');
});

