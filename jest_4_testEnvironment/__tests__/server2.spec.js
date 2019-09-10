'use strict';

const
  request = require('supertest'), 
  app = require('../app');

describe('testing server', () => {

  it('should return Hello World text', async () => {
    console.log(global.hlMySecondVar)
      const url = encodeURI('/');

      const response = await request(app)
        .get(url);

      expect(response.statusCode).toBe(200);
      expect(response.text).toBe('Hello World!');
    });
});

