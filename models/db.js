"use strict"
var express = require('express');
//mongoose数据库连接
var mongoose = require('mongoose');

//连接相应数据库，在这里连接的是test数据库
var db = mongoose.createConnection('mongodb://localhost/test');

// 链接错误
db.on('error', function(error) {
    console.log(error);
});

// 链接成功
db.once('open', function(error) {
    console.log("数据库连接成功");
});