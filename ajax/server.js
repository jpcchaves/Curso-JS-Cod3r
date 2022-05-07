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

    // interpreta o formulário que veio o arquivo do upload
    const multer = require('multer')

    // diskStorage recebe um objeto e esse objeto serve para personalizar a pasta que os arquivos serão salvos e o nome dos arquivos
    const storage = multer.diskStorage({
        destination: function(req, file, callback) {
            callback(null, './upload')
        },
        filename: function(req, file, callback){
            callback(null, `${Date.now}_${file.originalname}`)
        }
    })


const upload = multer( { storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando'))
