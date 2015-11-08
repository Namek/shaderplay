var gulp = require('gulp'),
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload');

var watchPaths = ['./**/*.htm'];

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(watchPaths).on('change', livereload.changed);

	return gulp.src(watchPaths)
		.pipe(watch(watchPaths));
});

gulp.task('default', ['watch']);