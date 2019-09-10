const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  logger = require('loglevel'),
  setupRoutes = require('./routes/routes');


async function startServer({port = process.env.SERVER_PORT} = {}) {
  port = port || 3000
  const app = express()
  app.use(cors())
  app.use(bodyParser.json())

  app.get('/', (req, res) => res.send('Hello World!'))

  setupRoutes(app);
  logger.setLevel('info');

  return new Promise(resolve => {
    const server = app.listen(port, () => {
      logger.info(`Listening on port ${server.address().port}`)
      const originalClose = server.close.bind(server)
      server.close = () => {
        return new Promise(resolveClose => {
          originalClose(resolveClose)
        })
      }
      resolve(server)
    })
  })
}

module.exports = startServer
