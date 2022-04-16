// configuração do express
    // Quando temos um projeto que tem comunicação com rede, temos que declarar uma porta
    // Porta: é um processo dentro de um computador 
const porta = 3003

// Importando o express
const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next( )
})

app.get('/produtos', (req, res, next) => {
    res.send({nome: "notebook", preco: 123.45})
}) 

app.listen(porta, () => {
    console.log(`Seridor está executando na porta ${porta}`)
})

