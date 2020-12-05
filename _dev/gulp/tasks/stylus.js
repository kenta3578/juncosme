/**
 * stylus
 * stylusのコンパイルタスク
 *
 * @return {Stream}
 */
const gulp = require('gulp');

gulp.task('stylus', () => {
  const config = require('../config.js');

  const plumber = require('gulp-plumber');
  const notify = require('gulp-notify');
  const stylus = require('gulp-stylus');
  const pleeease = require('gulp-pleeease');

  return gulp.src(config.path.src.styl)
  .pipe(plumber({errorHandler:notify.onError('Error1: <%= error.message %>')}))
  .pipe(stylus({
      cacheLocation: config.path.cacheLocation
  }))
  .pipe(pleeease({
    autoprefixer: {
      browsers: config.browsers
    },
    minifier: true,
    mqpacker: true
  }))
  .pipe(gulp.dest(config.path[global.env].css));

});
