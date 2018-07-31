var env = require('minimist')(process.argv.slice(2)),
  gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  browserSync = require('browser-sync'),
  cleanCSS = require('gulp-clean-css');
  rename = require("gulp-rename");
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
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
gulp.task('css', function(){
  gulp.src(['src/css/home.css', 'src/css/posts.css', 'src/css/minimal.css'])
  .pipe(plumber())
  .pipe(cleanCSS({ compatibility: 'ie8' }))
  .pipe(gulp.dest('_includes'))
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest('_includes'));
});

/**
* Javascript Task
*/
gulp.task('js', function () {
  return gulp.src((env.p) ? 'src/js/**/*.js' : ['src/js/**/*.js', '!src/js/analytics.js'])
    .pipe(plumber())
    .pipe(concat('blog.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'))
    .pipe(browserSync.reload({
      stream: true
  }))
});

/**
* Watch css files for changes & recompile
* Watch html/md files, run jekyll & reload BrowserSync
*/
gulp.task('watch', function () {
  gulp.watch('src/css/**/*.css', ['css', 'jekyll-rebuild']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch(['**/*.html', 'index.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

/**
* Default task, running just `gulp` will compile the css,
* compile the jekyll site, launch BrowserSync & watch files.
*/
gulp.task('default', ['js', 'css', 'browser-sync', 'watch']);

// build to deploy
gulp.task('build', ['js', 'css', 'jekyll-build']);