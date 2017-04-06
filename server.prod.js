'use strict';

var Nuxt = require('nuxt');

var express = require('express');
var app = express();
var nuxtConfig = require('./nuxt.config.js');
// const logger = require('morgan')
var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

app.set('port', port);
// Import API Routes

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(logger('dev'))

// Import and Set Nuxt.js options

// Init Nuxt.js
var nuxt = new Nuxt(nuxtConfig);
app.use(nuxt.render);

// Build only in dev mode
if (nuxtConfig.dev) {
  nuxt.build().catch(function (error) {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  });
}

// Listen the server
app.listen(port, host, function () {
  console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console
});
