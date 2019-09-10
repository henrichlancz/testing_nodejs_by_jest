'use strict';

const
  request = require('supertest'), 
  startServer = require('../server');

describe('testing server', () => {
  let server;

  beforeAll(async () => {
    server = await startServer({port: 3000})
  });

  afterAll(async done => {
    server.close(done);
  })



  it('should return Hello World text', async () => {
      const url = encodeURI('/');

      const response = await request(server)
        .get(url);

      expect(response.statusCode).toBe(200);
      expect(response.text).toBe('Hello World!');
    });
});

