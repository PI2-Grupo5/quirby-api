var express = require('express');

var routes = express.Router();
const path = require('path')

const robotRouter = require('./persons.js');
const personRouter = require('./robot.js');

routes.use('/', personRouter);
routes.use('/', robotRouter);

routes.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../view/index.html'));
});

module.exports = routes;