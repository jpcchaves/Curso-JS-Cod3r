// Prod e Servs

// Crie uma função que recebe um array de produtos e reotrne o total das despesas

const arrayDespesas = [
    {nome: "Jornal", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Diversão", preco: 150},
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]

function getPreco (array){
    return array.map(a => a.preco)
}

function soma (arrayPreco){
    resultado = 0;
    for (let i = 0; i < arrayPreco.length; i++){
        resultado += arrayPreco[i]
    }
    return resultado.toFixed(2).replace('.', ',')
}
console.log('R$', soma(getPreco(arrayDespesas)))


// Resolução do professor
    // somando
function despesasTotais (itens){
    let total = 0;

    for (let item of itens){
        total += item.preco
    }

    return total
}
console.log(despesasTotais(arrayDespesas))

// Usando reduce
function despesasTotaisReduce (itens) {
    return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0).toFixed(2).replace('.', ',')
}
console.log(despesasTotaisReduce(arrayDespesas))