var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('watch', function(){

	browserSync.init({
		notify: true,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function(){
		browserSync.reload();
	});

	watch('./app/assets/sass/**/*.scss', function(){
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	});
	

});

gulp.task('cssInject', ['sass'], function(){
	return gulp.src('./app/temp/styles/main.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
});