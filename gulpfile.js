'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass', 'sass:watch']);

gulp.task('sass', function () {
  gulp.src(['./assets/sass/*.sass'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/sass/*.sass', ['sass']);
});
