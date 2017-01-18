'use strict';

const express = require('express');
const volleyball = require('volleyball');
const db = require('../db/index');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

/* Logging Middleware */
app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Static Files */
const rootPath = path.join(__dirname, '..');
const publicPath = path.join(rootPath, 'public');
const nodeModulesPath = path.join(rootPath, 'node_modules');
app.use(express.static(rootPath));
app.use(express.static(publicPath));
app.use(express.static(nodeModulesPath));

/* Session MiddleWare */
app.use(session({
	secret: 'asdl;fkajsd23498wldkjas;ldkfj',
	resave: false,
	saveUninitialized: false
}));

/* Error-Handling Middleware */
app.use(function (err, req, res, next) {
  err.status = err.status || 500;
  console.error(err.stack);
  var html = [
    '<html><body>',
    '<p>ERROR: ', err.status, ' - ', err.message, '</p>',
    '<p>VERB: ', req.method, '</p>',
    '<p>URL: ', req.originalUrl, '</p>',
    '<p>QUERY ', JSON.stringify(req.query), '</p>',
    '<p>BODY: ', JSON.stringify(req.body), '</p>',
    '<pre>', err.stack, '</pre>',
    '</body></html>'
  ].join('');
  res.status(err.status).send(html);
});

/* Server */
const port = 8080;
app.listen(port, err => {
	if (err) throw err;
  console.log('HTTP server listening on port', port);
  db.sync()
  .then(function () {
    console.log('Postgres is up and running');
  });
});

module.exports = app;