var gulp = require('gulp');
var less = require('gulp-less');
var del = require('del');
var run_seq = require('run-sequence');

//Compiles and minifies all LESS files from src/css/ to dist/css/
gulp.task('less', function(){
    return gulp.src(['./src/**/*.less'])
      .pipe(less())
      .pipe(gulp.dest('./dist/'));
});

//Moves all files from src/ (such as images) to dist/
//Exluding .less files; those are
//moved in other fuctions
gulp.task('other_files', function(){
  return gulp.src(['./src/**/*', '!**/*.less'])
    .pipe(gulp.dest('./dist/'));
});

//Put's bootstrap files in dist folder
gulp.task('bootstrap', function(){
  //css
  gulp.src(['node_modules/bootstrap/less/bootstrap.less', 'src/less/*.less'])
    .pipe(less())
    .pipe(gulp.dest("dist/css"));

  //js
  gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest("dist/js"));
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
		'other_files',
	  'bootstrap'
  );
});

//Deletes dist/ folder for a clean build, then builds the site
gulp.task('default', function(){
	run_seq(
    'del-dist',
    'build'
  );
});
