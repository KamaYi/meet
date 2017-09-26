"use strict";
var mongoose = require('mongoose');
//var options = {
//    db: { native_parser: true },
//    server: { poolSize: 5 },
//    replset: { rs_name: 'myReplicaSetName' },
//    user: 'myUserName',
//    pass: 'myPassword'
//}

//mongoose数据库连接
var mongoose = require('mongoose');

console.log("5546546546546546546")
//连接相应数据库，在这里连接的是test数据库
var db = mongoose.createConnection('mongodb://localhost/test');

// 链接错误
db.on('error', function(error) {
    console.log(error);
});

// 链接成功
db.once('open', function(error) {
    console.log("mongoose restart");
});