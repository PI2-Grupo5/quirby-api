var express = require('express');

var router = express.Router();

const robotRouter = require('./persons');
const personRouter = require('./robot');

router.use('/', personRouter);
router.use('/', robotRouter);

module.exports = router;