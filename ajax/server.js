const bodyParser = require('body-parser')
const express = require('express')
// Instanciando o express
const app = express()

// Definindo as middlewares
    // Vai prover os arquivos estáticos
    app.use(express.static('.'))

    // se vier em formato de submit de formulário, vai ser transformado em objeto
    app.use(bodyParser.urlencoded({extended: true}))

    // Se for JSON, vai transformá-lo em objeto
    app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send('OK'))
app.listen(8080, () => console.log('Executando'))
