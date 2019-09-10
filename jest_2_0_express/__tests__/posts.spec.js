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
      const url = encodeURI('/api/posts');

      const response = await request(server)
        .get(url);

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.text);
      expect(body.posts[0].text).toBe('Have a nice day');
    });
});

