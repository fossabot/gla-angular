'use strict';

var gulp = require('gulp');
var ngConstant = require('gulp-ng-constant');
var path = require('path');
var conf = require('./conf');

gulp.task('constants', function () {
  return gulp.src('gulp/config.json')
    .pipe(ngConstant({
      name: 'glaAngular',
      constants: {SAILS_HOST: process.env.SAILS_HOST || 'localhost:1337'}
    }))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));
});
