// Como acessar um modulo que está nas pastas externas?
// PastaB -> PastaA -> pastaNode

    // Caminho relativo
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const c = require('./pastaC/index')
console.log(c.ola2)

    // Pegando o módulo HTTP
    const http = require('http')
    http.createServer((req, res) => {
        res.write('bom dia!')
        res.end()
    }).listen (8080)

 
