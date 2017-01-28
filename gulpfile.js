const gulp = require('gulp');
const less = require('gulp-less');
const pug = require('gulp-pug');
const concat = require('gulp-concat');
const del = require('del');

const path = require('path');
const buildPath = path.resolve(__dirname, 'shanbay', 'dist');

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
    return gulp.src([
            'shanbay/javascripts/utils/funs.js',
            'shanbay/javascripts/utils/element.js',
            'shanbay/javascripts/components/dialog.js',
            'shanbay/javascripts/components/pager.js',
            'shanbay/javascripts/components/remover.js',
            'shanbay/javascripts/components/translater.js',
            'shanbay/javascripts/index.js'
        ])
        .pipe(concat('index.js'))
        .pipe(gulp.dest(`${buildPath}`));
});

gulp.task('clean', function (cb) {
    return del([`${buildPath}/dist`], cb);
});

gulp.task('default', ['clean'], function() {
    gulp.start('views', 'stylesheets', 'javascripts');
});
