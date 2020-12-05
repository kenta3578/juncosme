/**
 * concat
 * 指定したファイルを結合して1ファイルにして出力
 *
 * @return {Stream}
 */
const gulp = require("gulp");

gulp.task("concat-js-entry", () => {
  const config = require("../config.js");
  const concat = require("gulp-concat");
  const minjs = require("gulp-uglify");
  const babel = require("gulp-babel");
  const plumber = require("gulp-plumber");
  const notify = require("gulp-notify");

  return gulp
    .src(config.path.src.js_entry)
    .pipe(
      plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
    )
    .pipe(concat("app.js"))
    .pipe(concat("news.js"))
    .pipe(
      babel({
        presets: ["@babel/preset-env"]
      })
    )

    .pipe(
      minjs({
        compress: true // 圧縮する
        // mangle: false, // 変数の難読化を行う
        // preserveComments: 'some' // 「*!」で始まるブロックコメントを残す
      })
    )
    .pipe(gulp.dest(config.path[global.env].js_entry));
});
