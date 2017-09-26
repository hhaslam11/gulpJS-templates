var gulp = require('gulp');
var less = require('gulp-less');
var del = require('del');
var run_seq = require('run-sequence');
var clean_html = require('gulp-htmlmin');
var clean_css = require('gulp-clean-css');
var clean_js = require('gulp-minify');

//Put's bootstrap files in dist folder
gulp.task('bootstrap', function(){
  //css
  gulp.src(['node_modules/bootstrap/less/bootstrap.less', 'src/less/*.less'])
    .pipe(less())
    .pipe(clean_css({compatibility: 'ie8'}))
    .pipe(gulp.dest("dist/css"));

  //js
  gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(clean_js())
    .pipe(gulp.dest("dist/js"));
});

//Deletes everything in dist/
//recommended for a fresh build of the site.
gulp.task('del-dist', function(){
	return del(['dist/']);
});

//Compiles and minifies all LESS files from src/css/ to dist/css/
gulp.task('less', function(){
    return gulp.src(['./src/css/**/*.less'])
      .pipe(less())
      .pipe(clean_css({compatibility: 'ie8'}))
      .pipe(gulp.dest('./dist/css/'));
});

//Minifies files from src/js/ and moves to dist/js/
gulp.task('js', function(){
});

//Minifies html files from src/ and moves to dist/
gulp.task('html', function(){
});

//Moves all files from src/ (such as images) to dist/
//Exluding src/js, src/css, and html files; those are
//moved in other fuctions
gulp.task('other_files', function(){
});

//Runs all the tasks mandatory to building the website
gulp.task('default', function(){
	run_seq(
    'less',
	  'js',
    'html',
		'other_files',
	  'bootstrap'
  );
});
