'use strict';

const gulp = require('gulp');
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

function buildStyles() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
};