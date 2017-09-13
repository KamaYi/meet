"use strict";
var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch',function(){
    livereload.listen({start:true});
    gulp.watch('./views/**/*.*', function(file) {
        livereload.changed(file.path);
    });

})