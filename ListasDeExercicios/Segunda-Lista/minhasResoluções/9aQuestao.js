// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.

repetidor = (num, repetidor) => {
    let resultado = []
    for (let i = 0; i < repetidor; i++){
        resultado.push(num)
    }
    return resultado
}
console.log(repetidor(7,3))
console.log(repetidor(8,4))
