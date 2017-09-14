"use strict"
var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.sendfile("./src/index.html");
});

router.get('/login', function(req, res, next) {
  console.log("66666666666666666")
  // res.sendfile("./src/views/myCenter/login.html");
  res.sendfile("./src/index.html");
});

module.exports = router;
