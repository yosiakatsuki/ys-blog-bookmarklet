var gulp					 = require('gulp');
var plumber				 = require('gulp-plumber');
var rename				 = require('gulp-rename');
var uglify				 = require('gulp-uglify');

//------------------------------------------------------------------------
//js圧縮
//------------------------------------------------------------------------
//js圧縮処理等の対象
var src_js = [
	'./*.js',
	'!./*.min.js'
]
gulp.task('minjs', function() {
	gulp.src(src_js)
		.pipe(plumber({
			errorHandler: function(err) {
				console.log(err.messageFormatted);
				this.emit('end');
			}
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify({preserveComments: 'some'}))
		.pipe(gulp.dest('./'));
});