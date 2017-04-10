const gulp = require('gulp')
const postcss = require('gulp-postcss')

const easyImport = require('postcss-easy-import')
const salad = require('postcss-salad')

const cssnano = require('cssnano')
const plugins = [
  easyImport(),
  salad()
]

const prodPlugins = [cssnano()]

gulp.task('css', function () {
  return gulp
    .src('./assets/css/src/main.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./assets/css'))
})

gulp.watch('assets/css/src/**/*.css', ['css'])
