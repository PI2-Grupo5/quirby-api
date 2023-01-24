var express = require('express');

var router = express.Router();

const robotRouter = require('./persons');
const personRouter = require('./robot');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/', personRouter);
router.use('/', robotRouter);

module.exports = router;
