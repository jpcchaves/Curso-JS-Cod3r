// Desafio sobre map
    // Retornar um array apenas com os preços
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.90 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

const converte = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
 
const resultado = carrinho.map(converte).map(apenasPreco)
console.log(resultado)

