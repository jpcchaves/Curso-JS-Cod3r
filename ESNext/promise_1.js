// Quando criamos uma Promessa, temos uma promessa de algo que será executado e devolvido no futuro. Podemos receber todos os tipos de dados, a resposta de uma requisição, o conteúdo de um arquivo.

// Ou seja, é uma promessa que vai retornar um dado no futuro

console.log(typeof Promise) // function

let p = new Promise(function (cumprirPromessa){
    cumprirPromessa({
        x: 3,
        y: 4
    })
}) // instanciando um objeto

console.log(p)
console.log(typeof p)

//acessando o valor que cumpriu a promessa
p.then(function(valorRetornado){
    console.log(valorRetornado.y)
})

// Podemos retornar um array na Promise também:

let a = new Promise(function(resolve){
    resolve(['João', 'Ana', 'Alicia', 'Pedro', 'Luis'])
})

// O then é cumulativo. O resuultado de um then é passado para o próximo e assim em diante.
a
    .then(nome => nome[0])
    .then(primeiroNome => primeiroNome)
    .then(primeiroNomeMaiusculo => console.log(primeiroNomeMaiusculo.toUpperCase( )))

// Usando funções para as chamadas do .then

const primeiroNome = nome => nome[0]

const primeiraLetra = string => string[0]

const letraMaiuscula = letra => letra.toUpperCase()

a
    .then(primeiroNome)
    .then(primeiraLetra)
    .then(letraMaiuscula => console.log(letraMaiuscula))
