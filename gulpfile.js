var gulp = require('gulp')
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function() {
    var tsResult = gulp.src('lib/*')
        .pipe(sourcemaps.init()) // This means sourcemaps will be generated 
        .pipe(ts({
            noImplicitAny: true,
            target: "es5",
            module: "amd",
            outFile: "app.js",
            jsx: "react"
        }));

    return tsResult.js
        .pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file 
        .pipe(gulp.dest('app/js'));
});