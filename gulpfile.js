'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var sassFolder = './style/sass/';
 
gulp.task('sass', function () {
  return gulp.src(sassFolder + '**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
    .pipe(gulp.dest('./style'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(sassFolder + '**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
