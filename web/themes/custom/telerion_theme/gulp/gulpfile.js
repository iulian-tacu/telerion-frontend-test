const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

async function defaultTask() {
  return src('src/main.scss')
      .pipe(sass())
      .pipe(cleanCSS())
      .pipe(rename({ extname: '.min.css' }))
      .pipe(dest('../assets/css/'));
}

async function browserSyncTask() {
  browserSync.init({
    proxy:"http://telerion-test.localhost",
  }, () => {});
}

exports.default = () => watch('src/scss/*.scss', { ignoreInitial: false }, series(defaultTask, browserSyncTask));