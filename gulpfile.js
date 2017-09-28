var env = require('minimist')(process.argv.slice(2)),
  gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  browserSync = require('browser-sync'),
  cleanCSS = require('gulp-clean-css');
  rename = require("gulp-rename");
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  imagemin = require('gulp-imagemin'),
  cp = require('child_process');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
* Build the Jekyll Site
*/
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('bundle', ['exec', 'jekyll build'], { stdio: 'inherit' })
    .on('close', done);
});

/**
* Rebuild Jekyll & do page reload
*/
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

/**
* Wait for jekyll-build, then launch the Server
*/
gulp.task('browser-sync', ['jekyll-build'], function () {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

/**
* Css Task
*/
gulp.task('minify-css', function () {
  // return gulp.src('src/css/main.css')
  return gulp.src('src/css/*.css')
    .pipe(plumber())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(concat('main.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({
      stream: true
  }))
});

/**
* Javascript Task
*/
gulp.task('minify-js', function () {
  return gulp.src((env.p) ? 'src/js/**/*.js' : ['src/js/**/*.js', '!src/js/analytics.js'])
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'))
    .pipe(browserSync.reload({
      stream: true
  }))
});

/**
* Imagemin Task
*/
gulp.task('imagemin', function () {
  return gulp.src('src/img/**/*.{jpg,png,gif}')
    .pipe(plumber())
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    .pipe(gulp.dest('assets/img/'));
});

/**
* Watch stylus files for changes & recompile
* Watch html/md files, run jekyll & reload BrowserSync
*/
gulp.task('watch', function () {
  gulp.watch('src/css/**/*.css', ['minify-css']);
  gulp.watch('src/js/**/*.js', ['minify-js']);
  gulp.watch(['**/*.html', 'index.html', '_includes/*.html', '_layouts/*.html', '*.md', '_posts/*'], ['jekyll-rebuild']);
});

/**
* Default task, running just `gulp` will compile the stylus,
* compile the jekyll site, launch BrowserSync & watch files.
*/
gulp.task('default', ['minify-css', 'minify-js', 'browser-sync', 'watch']);