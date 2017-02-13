const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const less = require('gulp-less');
const pug = require('gulp-pug');
const babel = require('gulp-babel');
const del = require('del');
const path = require('path');

const buildPath = path.resolve(__dirname, 'shanbay', 'dist');

gulp.task('views', () => {
    return gulp.src('shanbay/views/index.pug')
        .pipe(pug())
        .pipe(gulp.dest(`${buildPath}`));
});

gulp.task('stylesheets', () => {
    return gulp.src('shanbay/stylesheets/index.less')
        .pipe(less())
        .pipe(gulp.dest(`${buildPath}`));
});

gulp.task('compile', () => {
    return gulp.src('shanbay/javascripts/index.js')
        .pipe(babel())
        .pipe(gulp.dest(`${buildPath}`))
});

gulp.task('javascripts', ['compile'], () => {
    return browserify(`shanbay/javascripts/index.js`).bundle()
        .pipe(buffer())
        .pipe(uglify())
        .pipe(rename('app.js'))
        .pipe(gulp.dest(`${buildPath}/index2.js`))
});

gulp.task('clean', () => {
    return del([`${buildPath}/dist`]);
});

gulp.task('default', ['clean'], () => {
    gulp.start('views', 'javascripts', 'stylesheets');
});
