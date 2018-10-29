import gulp from 'gulp';

gulp.task('copy', () => {
    gulp.src('./src/assets/images/favicon/**')
        .pipe(gulp.dest('./dist/static/images/favicon'));

    gulp.src('./google5af196874a5d7276.html')
        .pipe(gulp.dest('./dist'));

    gulp.src('./yandex_f7b9309755c878c7.html')
        .pipe(gulp.dest('./dist'));

    return true;
});
