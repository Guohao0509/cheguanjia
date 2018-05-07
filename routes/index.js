var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '挡中央政痔菊高级会所欢迎您' });
});

module.exports = router;
