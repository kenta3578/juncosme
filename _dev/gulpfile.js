global.env = 'release';

const gulp = require('gulp');
const requireDir = require('require-dir');
const config = require('./gulp/config.js');

requireDir('./gulp/tasks', {
  recurse: true
});

gulp.task('default', ()=> {
  const tasks = config.enabled;
  console.log(tasks);
  for (const task of tasks) {
    gulp.start(task);
  }
});
