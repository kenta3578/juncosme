/**
 * watch
 * 対象ファイルを監視し変更があった場合に実行するタスク
 */

const gulp = require('gulp');

gulp.task('watch', (callback) => {
	const config = require('../config.js');
	const watch = require('gulp-watch');
	const tasks = config.enabled;

	if (tasks.includes('pug')) gulp.watch(config.path.watch.pug, ['pug']);
	if (tasks.includes('ejs')) gulp.watch(config.path.watch.ejs, ['ejs']);
	if (tasks.includes('scss')) gulp.watch(config.path.watch.scss, ['scss']);
	if (tasks.includes('stylus')) gulp.watch(config.path.watch.stylus, ['stylus']);
	if (tasks.includes('concat-js-libs')) gulp.watch(config.path.watch.js_libs, ['concat-js-libs']);
	if (tasks.includes('concat-js-entry')) gulp.watch(config.path.watch.js_entry, ['concat-js-entry']);
	if (tasks.includes('imgmin')) gulp.watch(config.path.watch.img, ['imgmin']);
});
