var gulp = require('gulp');
var less = require('gulp-less');
var del = require('del');
var run_seq = require('run-sequence');
var clean_html = require('gulp-htmlmin');
var clean_css = require('gulp-clean-css');
var clean_js = require('gulp-minify');

//Compiles and minifies all LESS files from src/css/ to dist/css/
gulp.task('less', function(){
    return gulp.src(['./src/**/*.less'])
      .pipe(less())
      .pipe(clean_css({compatibility: 'ie8'}))
      .pipe(gulp.dest('./dist/'));
});

//Minifies files from src/js/ and moves to dist/js/
gulp.task('js', function(){
  return gulp.src(['./src/**/*.js'])
    .pipe(clean_js({
      ext: {
            min: '.js'
        },
        noSource: {}
    }))
    .pipe(gulp.dest('./dist/'));
});

//Minifies html files from src/ and moves to dist/
gulp.task('html', function(){
  return gulp.src(['./src/**/*.html'])
    .pipe(clean_html())
    .pipe(gulp.dest('./dist/'));
});

//Moves all files from src/ (such as images) to dist/
//Exluding .js, .less, and .html files; those are
//moved in other fuctions
gulp.task('other_files', function(){
  return gulp.src(['./src/**/*', '!**/*.less', '!**/*.js', '!**/*.html'])
    .pipe(gulp.dest('./dist/'));
});

//Deletes everything in dist/
//recommended for a fresh build of the site.
gulp.task('del-dist', function(){
	return del(['dist/']);
});

//Runs tasks needed to build the website into /dist/
gulp.task('build', function(){
  run_seq(
    'less',
	  'js',
    'html',
		'other_files'
  );
});

//Deletes dist/ folder for a clean build, then builds the site
gulp.task('default', function(){
	run_seq(
    'del-dist',
    'build'
  );
});
