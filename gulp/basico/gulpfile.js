const gulp = require("gulp");
const {series, parallel} = require('gulp')

const antes1 = (cb) => {
  console.log("Tarefa Antes 1");
  return cb();
};

const antes2 = (cb) => {
  console.log("Tarefa Antes 2");
  return cb();
};

function copiar(callback) {
        // Primeira Alternativa
//   gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        // Segunda Alternativa
    gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB'))
        // Metodos hipotéticos
    // .pipe(imagePelaMetade())
    // .pipe(pretoEBranco())
    // .pipe(transformacaoA())
    // .pipe(transformacaoB())
    // .pipe(transformacaoC())
  return callback();
}

const fim = (cb) => {
  console.log("Tarefa Fim");
  return cb();
};

// Chamada em serie sequencial
module.exports.default = series(
    parallel(antes1, antes2), 
    copiar, 
    fim,
);
