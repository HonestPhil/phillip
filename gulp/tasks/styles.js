var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),

	input = './app/assets/styles/**/*.scss',
    output = './app/temp/styles',
    
    sassOptions = {
        errLogConsole: true,
        outputStyle: 'expanded'
    };


gulp.task('sass', function(){
    return gulp
    .src(input)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(output));
});