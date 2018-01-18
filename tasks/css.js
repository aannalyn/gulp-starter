const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const config = require('./config');

let cssTask = function() {
  gulp.src(`${config.dev.sass}bundle.scss`)
    .pipe(sass({
      outputStyle: 'compressed',  // nested, expanded, compact, compressed
      errLogToConsole: true,
      includePaths: [config.nodemodules.bootstrap.scss]
    }))
    .pipe(gulp.dest(`${config.dist.css}`))
    .pipe(browserSync.reload({ stream: true}));
};

gulp.task('css', cssTask);