"use strict";
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('../views/index.html');
  res.sendfile("views/index.html");
});

router.get('/login', function(req, res, next) {
  // res.render('../views/index.html');
  res.sendfile("src/templates/myCenter/login.html");
});

module.exports = router;
