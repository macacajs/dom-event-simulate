'use strict';

const gulp = require('gulp');
const uitest = require('gulp-uitest');
const render = require('macaca-reporter/lib/render');
const coverage = require('macaca-reporter/lib/coverage');

gulp.task('test', () => {
  return gulp
    .src('test/index.html')
    .pipe(uitest({
      width: 600,
      height: 480,
      hidpi: false,
      useContentSize: true,
      show: true
    }));
});

gulp.task('reporter', done => {
  coverage(() => {});
  const data = require('./reports/json-final');
  render(data);
  done();
});

gulp.task('test:reporter', gulp.series('test', 'reporter'));

gulp.task('default', gulp.series('test'));
