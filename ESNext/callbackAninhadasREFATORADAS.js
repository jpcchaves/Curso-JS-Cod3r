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
                } catch (e){
                    reject(e)
                }
            })
        })
    })
}

let nomes = []
// Teremos todos os nomes da turma A
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
    })
    getTurma('C').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
        console.log(nomes)
    })
})

// Forma mais simples:
Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
.then(turmas => [].concat(...turmas))
.then(alunos => alunos.map(aluno => aluno.nome))
.then(nomes => console.log(nomes))
