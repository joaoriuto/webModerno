const gulp = require('gulp')
// const series = gulp.series
const {series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Tarefa antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

function copiar(callBack) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB'))
    // .pipe(transformacaoA())
    // .pipe(transformacaoB())
    return callBack()
}

const fim = cb => {
    console.log('Fim!')
    return cb()
}

//Execução em série:
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)