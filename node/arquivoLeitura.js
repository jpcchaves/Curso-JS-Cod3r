const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// lendo um arquivo de forma síncrona
    //não recomendado, porque ele só libera as informações quando o arquivo é lido por inteiro, o que pode, dependendo do tamanho do arquivo, travar o event loop
const conteudo = fs.readFileSync(caminho, 'UTF-8')
console.log(conteudo)

// Assincrono
    //não recomendado, porque ele só libera as informações quando o arquivo é lido por inteiro, o que pode, dependendo do tamanho do arquivo, travar o event loop
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Uma forma mais simples de ler
const config = require('./arquivo.json')
console.log(config)

// Lendo uma pasta:
fs.readdir(__dirname, (erro, arquivos) => {
    console.log('Conteudo da pasta:')
    console.log(arquivos)
})
