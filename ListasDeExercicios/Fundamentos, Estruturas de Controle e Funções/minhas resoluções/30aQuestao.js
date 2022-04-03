// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const numeros = [ -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22];

maiorMenor = numeros => {
    let maior = numeros[0];
    let menor = numeros[0];
    for (let i = 1; i <= numeros.length; i++){
        if (numeros[i + 1] > numeros [i]){
            maior = numeros[i + 1]
        }
        if (numeros[i + 1] < numeros[i]){
            menor = numeros[i + 1]
        } 
    }
    console.log(`
    O maior número foi ${maior}
    O menor número foi ${menor}
    `)
}
maiorMenor(numeros)
