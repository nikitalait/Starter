'use strict';

module.exports = function($) {
	$.gulp.task('watch', function() {
		$.gulp.watch('./app/js/**/*.js', $.gulp.series('js.process'));
		$.gulp.watch('./app/template/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('./app/styles/**/*.scss', $.gulp.series('sass'));
		$.gulp.watch('./app/imgs/decorate/svg-symbols/*', $.gulp.series('img.symbols.svg'));
	})
}