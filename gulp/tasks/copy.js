import gulp from 'gulp';

gulp.task('copy', () => {
    gulp.src('./src/assets/images/favicon/**')
        .pipe(gulp.dest('./dist/static/images/favicon'));

    return true;
});
