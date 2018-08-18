const express = require('express');
const routes = require('./routes/index.js');

const app = express();

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next()
};
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(allowCrossDomain);
app.use('/', routes);

module.exports = app;
