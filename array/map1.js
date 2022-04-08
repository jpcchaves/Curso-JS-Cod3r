// O map serve para transfrormar um array em outro
    // regra: se o array original tiver 6 elementos, o resultado do map vai gerar um array com 6 elementos com os dados transformados.

const nums = [2, 4, 5, 6, 7]

// For com propósito
let resultado = nums.map(function(elemento){
    // propósito: mapear -> o dobro do elemento
    return elemento*2
})
// retorna o array com os elementos multiplicados por 2 
console.log(resultado, nums)


// Passando as funções no map
const soma10 = e => e + 10
const triplo = e => e * 10
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado, nums)


