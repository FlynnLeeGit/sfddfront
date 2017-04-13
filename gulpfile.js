const gulp = require('gulp')
const postcss = require('gulp-postcss')

const easyImport = require('postcss-easy-import')
const salad = require('postcss-salad')
const saladConf = require('./config')

const cssnano = require('cssnano')
const plugins = [
  easyImport(),
  salad(saladConf)
]

const prodPlugins = [cssnano()]

gulp.task('css', function () {
  return gulp
    .src('./assets/css/src/main.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./assets/css'))
})

gulp.watch('assets/css/src/**/*.css', ['css'])
