const gulp = require('gulp')
const postcss = require('gulp-postcss')

const easyImport = require('postcss-easy-import')
const advancedVariables = require('postcss-advanced-variables')
const mixins = require('postcss-mixins')
const cssNext = require('postcss-cssnext')
// const styleguide = require('postcss-style-guide')

const cssnano = require('cssnano')
const plugins = [
  easyImport(),
  advancedVariables(),
  mixins(),
  cssNext()
]

const prodPlugins = [cssnano()]

gulp.task('css', function () {
  return gulp
    .src('./assets/css/src/main.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./assets/css'))
})

gulp.watch('assets/css/src/**/*.css', ['css'])
