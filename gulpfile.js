var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect-php');

gulp.task('sass', function() {
    return gulp.src('./assets/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('connect', function() {
    connect.server({
        base: './dist'
    });
});

gulp.task('default', ['connect']);