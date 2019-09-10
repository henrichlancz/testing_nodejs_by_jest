const express = require('express'),
  setupPostRoutes = require('./posts');

function setupRoutes(app) {
  const postRouter = express.Router()
  setupPostRoutes(postRouter)
  app.use('/api/posts', postRouter)
}

module.exports = setupRoutes