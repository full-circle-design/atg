var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var ejs = require('gulp-ejs');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleancss = require('gulp-clean-css');
// Static Server
gulp.task('serve', ['sass','scripts','ejs'], function() {
    browserSync.init({
        server: './',
        browser: 'google chrome'
    });

    gulp.watch('css/*.scss', ['sass']);
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('views/**/*.ejs', ['ejs']);
    gulp.watch('*.html').on('change', browserSync.reload);

});

gulp.task('sass', function() {
    return gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(rename('bundle.css'))
        .pipe(gulp.dest('assets/css'))
        .pipe(cleancss())
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(browserSync.stream());
});

gulp.task('ejs', function(){
  return gulp.src('./views/*.ejs')
    .pipe(ejs({}, {}, { ext: '.html' }))
    .pipe(gulp.dest('./'));
    browserSync.reload({stream: true});
});

gulp.task('default', ['serve']);
