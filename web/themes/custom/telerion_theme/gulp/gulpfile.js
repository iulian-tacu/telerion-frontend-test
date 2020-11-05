const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const minify = require('gulp-minify');

async function defaultTask() {
  return src('src/main.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('../assets/css/'))
    .pipe(browserSync.stream());
}

exports.default = () => {
  browserSync.init({
    proxy:"http://telerion-test.localhost",
  }, () => {});

  watch('src/scss/*.scss', { ignoreInitial: false }, defaultTask);
}

exports.minifyJS = () => {
  return src('src/js/*.js')
    .pipe(minify({
      ext: {
        min: '.min.js'
      },
      noSource: true
    }))
    .pipe(dest('../assets/js/'))
}
