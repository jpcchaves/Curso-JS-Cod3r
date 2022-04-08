// A função callback do forEach pode receber 3 parâmetros respeitando a ordem: 1º nome; 2º índice, 3º o próprio array


// forEach => percorre o array
const aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array){
    console.log(`${indice+1}) ${nome}`)
    console.log(`${array}`)
})

// Função callback reduzida apenas com o nome

aprovados.forEach(nome => console.log(nome))

console.log(`====================`)

// Armazenando uma função em uma variável e passar a função como parâmetro para o forEach

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
