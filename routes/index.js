var express = require('express');

var routes = express.Router();

const robotRouter = require('./persons.js');
const personRouter = require('./robot.js');

routes.use('/', personRouter);
routes.use('/', robotRouter);

module.exports = routes;