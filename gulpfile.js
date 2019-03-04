const gulp = require('gulp');
const uitest = require('gulp-uitest');
const render = require('macaca-reporter/lib/render');
const coverage = require('macaca-reporter/lib/coverage');

// test
gulp.task('test', [], function() {
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

gulp.task('test:reporter', ['test'], function() {
  coverage(() => {});
  const data = require('./reports/json-final');
  render(data);
});

gulp.task('default', ['test']);
