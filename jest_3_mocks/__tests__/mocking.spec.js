'use strict';

const
  request = require('supertest'), 
  startServer = require('../server');

const
  db = require('../utils/db');
  jest.mock('../utils/db');
  

describe('testing server', () => {
  let server;

  beforeAll(async () => {
    
    server = await startServer({port: 3000})
  });

  afterAll(async done => {
    server.close(done);
  })

  // it('should return Hello World text', async () => {
    
  //   const url = encodeURI('/api/posts');

  //   const response = await request(server)
  //     .get(url);

  //   expect(response.statusCode).toBe(200);
  //   const body = JSON.parse(response.text);
  //   console.log(JSON.stringify(body));
  //   expect(body.posts[0].text).toBe('Have a nice day');
  // });



  // it('should return Hello World text', async () => {
   
  //   const data = { id:55, text: 'Mocking life'}
  //   db.getPosts.mockResolvedValue(data);
  //   const url = encodeURI('/api/posts');

  //   const response = await request(server)
  //     .get(url);

  //   expect(response.statusCode).toBe(200);
  //   const body = JSON.parse(response.text);
  //   console.log(JSON.stringify(body));
  //   expect(body.posts.text).toBe('Mocking life');
  // });

  it('should return data from __mocks__ folder', async () => {
    const url = encodeURI('/api/posts');

    const response = await request(server)
      .get(url);

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.text);
    console.log(JSON.stringify(body));
    expect(body.posts[0].text).toBe('mock_30');
  });

  
});

