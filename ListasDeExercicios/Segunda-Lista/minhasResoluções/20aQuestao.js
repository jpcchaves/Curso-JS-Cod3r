let array1 = [10, 5, 35, 65]
function getMenorNumero (numeros) {
    let min = Math.min(...numeros)
    return min
}
console.log(getMenorNumero(array1))

// Usando map e reduce:
function getMenor (numeros){
    let min = numeros.map(Number).reduce(function(a, b){
        return Math.min(a, b)
    })
    return min
}
console.log(getMenor(array1))
