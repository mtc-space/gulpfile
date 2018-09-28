var gulp          = require('gulp');
var sass          = require('gulp-sass');
var browserSynch  = require('browser-synch');

// Compilation du code .scss vers css
gulp.task('sass', function() {
  return gulp.src('assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSynch.reload({
      stream: true
    }))
});

// Observation de modification de fichier .scss
gulp.task('watch', ['browserSynch', 'sass'], function() {
  gulp.watch('assets/sass/**/*.scss', ['sass']);
});

// Rafraîchissement auto des navigateurs web
gulp.task('browserSynch', function() {
  browserSynch({
    server: {
      baseDir: 'assets'
    }
  })
});
