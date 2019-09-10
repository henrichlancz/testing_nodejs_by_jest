'use strict';

const logger = require('loglevel'),
setupRoutes = require('./routes/routes');

const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})
setupRoutes(app);
logger.setLevel('info');

module.exports = app