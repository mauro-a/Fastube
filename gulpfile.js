var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
const PATH = './src/js/*.js';

gulp.task('build', function() {
    return gulp.src(PATH)
		.pipe(babel())
		.pipe(uglify())
		.pipe(concat('compiled.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('connect', function() {
	connect.server({
		root: '',
		livereload: true
	});
});

gulp.watch(PATH, function() {
	gulp.run('build');
});

gulp.task('reload', function() {
	gulp.src('index.html')
	.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(['./dist/compiled.js'], ['reload'] )
});

gulp.task('default', ['connect', 'watch']);