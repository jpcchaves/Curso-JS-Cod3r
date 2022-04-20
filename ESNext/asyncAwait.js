// Transformando o código em assincrono em algo síncrono

// COM PROMISE
const http = require('http')
const { get } = require('lodash')

const getTurma = letraDaTurma => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letraDaTurma}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

// Recurso do ES8
// Objetivo de simplificar o uso de promise
let obterAlunos = async () => {
    // Obrigatório o uso de async
    const turmaA = await(getTurma("A"))
    const turmaB = await(getTurma("B"))
    const turmaC = await(getTurma("C"))
    return [].concat(turmaA, turmaB, turmaC)
} // retorna um objeto asyncFunction

obterAlunos()
    .then(alunos =>  alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))


