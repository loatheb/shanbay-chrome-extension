const gulp = require('gulp');
const less = require('gulp-less');
const pug = require('gulp-pug');

const path = require('path');
const buildPath = path.resolve(__dirname, '../', 'dist');

gulp.task('views', function () {
    return gulp.src('shanbay/views/index.pug')
        .pipe(pug())
        .pipe(gulp.dest(`${buildPath}`));
});

gulp.task('stylesheets', function () {
    return gulp.src('shanbay/stylesheets/index.less')
        .pipe(less())
        .pipe(gulp.dest(`${buildPath}`));
});

gulp.task('javascripts', function () {
    return gulp.src()
})
