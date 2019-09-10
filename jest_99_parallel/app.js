'use strict';

const express = require('express')
const app = express()
app.get('/', (req, res) => {
    for(let i=1;i<80000;i++) {
      for(let j=1;j<100000;j++){

      }
    }
    res.status(200).send('Hello World!')
})
module.exports = app