'use strict';

const startServer = require('./server');


const isProd = process.env.NODE_ENV === 'production';


startServer({port: isProd ? process.env.PORT : undefined});
