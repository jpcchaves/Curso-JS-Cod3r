const { series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");

function trasnformacaoJS(cb) {
  return gulp
    .src("src/**/*.js")
    .pipe(
      babel({
        comments: false,
        presets: ["env"],
      })
    )
    .pipe(uglify())
    .on("error", (err) => console.log(err))
    .pipe(concat("condigo.min.js"))
    .pipe(gulp.dest("build"));
}

function fim(cb) {
    console.log("FIM!!!!")
    return cb()
}

module.exports.default = series(trasnformacaoJS, fim);
