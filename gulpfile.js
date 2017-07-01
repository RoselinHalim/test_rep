var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('app/style/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/style/sass/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('app/style/sass**/*.scss', ['sass']);
});