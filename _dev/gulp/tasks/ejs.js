/**
 * pug
 * /src/内のpugファイルをコンパイルし/htdocs/に出力するタスク
 *
 * @return {Stream}
 */
const gulp = require('gulp');

gulp.task('ejs', () => {
  const config = require('../config.js');
  const ejs = require('gulp-ejs');
  const plumber = require('gulp-plumber');
  const rename = require('gulp-rename');
  const notify = require('gulp-notify');

  return gulp.src(config.path.src.ejs)
    .pipe(plumber({errorHandler:notify.onError('Error: <%= error.message %>')}))
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest(config.path[global.env].html));
});
