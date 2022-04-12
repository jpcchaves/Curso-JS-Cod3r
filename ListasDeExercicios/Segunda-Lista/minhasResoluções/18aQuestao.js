// Media


let numeros = [10, 20, 20, 50]

soma = array => array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
comprimento = array => array.length
media = (soma, comprimento) => soma / comprimento

console.log(media(soma(numeros), comprimento(numeros)))


// Solução do professor

function calcularMedia(numeros){
    const qtdeNum = numeros.length;
    const somaTotal = numeros.reduce((numA, numB) => numA + numB)

    return somaTotal / qtdeNum
}

console.log(calcularMedia(numeros))
