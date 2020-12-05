/**
 * scss
 * sassのコンパイルタスク
 *
 * @return {Stream}
 */
const gulp = require('gulp');

gulp.task('scss', () => {
  const config = require('../config.js');

  const plumber = require('gulp-plumber');
  const notify = require('gulp-notify');
  // const foreach = require('gulp-foreach');

  const sass = require('gulp-sass');
  const sassGlob = require("gulp-sass-glob");
  // const gulppath = require('path');

  const pleeease = require('gulp-pleeease');

  const header = require('gulp-header');
  const replace = require('gulp-replace');

  return gulp.src(config.path.src.scss)
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err.messageFormatted);
        this.emit('end');
      }
    }))
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(pleeease({
      autoprefixer: {
        browsers: config.browsers
      },
      minifier: true,
      mqpacker: true
    }))
    .pipe(replace(/@charset "utf-8";/g, ''))
    .pipe(header('@charset "utf-8";'))
    .pipe(gulp.dest(config.path[global.env].css));

});
