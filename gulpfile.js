var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('css', function() {
    gulp.src('resources/sass/app/app.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 10 versions'))
        .pipe(gulp.dest('css'));
});

gulp.task('fontawesome', function() {
    gulp.src('resources/sass/fontawesome/font-awesome.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 10 versions'))
        .pipe(gulp.dest('css'));
});


gulp.task('js', function() {
    return browserify('resources/js/app.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('js'));
});