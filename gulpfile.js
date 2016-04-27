var gulp = require('gulp'),
    sass = require('gulp-sass'),
    inky = require('inky'),
    inlineCss = require('gulp-inline-css');


//STYLES
gulp.task('styles', function () {
  return gulp.src('./scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

//CONVERTE INKY
gulp.task('inky', function() {
  return gulp.src('./templates/**/*.html')
    .pipe(inky())
    .pipe(gulp.dest('./dist'));
});

//INLINE CSS
gulp.task('inline', function () {
  return gulp.src('./dist/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('./dist/inlined'));
});


//WATCH
gulp.task('default',function() {
    gulp.watch('./scss/**/*.scss',['styles']);
    gulp.watch('./templates/**/*.html',['inky']);
});