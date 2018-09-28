var gulp          = require('gulp');
var sass          = require('gulp-sass');
var browserSynch  = require('browser-sync');

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
  // Rafraîchir la page lors des modifications HTML, PHP ou JS
  gulp.watch('*.html', browserSynch.reload);
  gulp.watch('*.js', browserSynch.reload);
  gulp.watch('*.php', browserSynch.reload);
});

// Rafraîchissement auto des navigateurs web
gulp.task('browserSynch', function() {
  browserSynch({
    server: {
      baseDir: 'assets'
    }
  })
});
