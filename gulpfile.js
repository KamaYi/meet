"use strict";
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon'); //监控文件变化，有变化则立即重启服务


//livereload 任务
gulp.task('watch',function(){
    livereload.listen({start:true});
    gulp.watch('./views/**/*.*', function(file) {
        livereload.changed(file.path);
    });
})

//服务端任务重启
gulp.task("nodemon", function () {
    nodemon({
        script: "app.js",
        ext: "js",
        ignore: ['./node_modules']
    }).on("restart", function () {
        // runSequence('watch')
        console.log('restart');
    });
});

//默认任务
gulp.task('default',['watch','nodemon']);