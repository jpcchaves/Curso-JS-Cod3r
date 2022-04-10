// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.

simboloMais = param => {
    let qtdeMais = '';
    for (let i = 0; i<param; i++){
        qtdeMais += '+'
    }
    return qtdeMais
}
console.log(simboloMais(12))
console.log(simboloMais(2))
console.log(simboloMais(5))
