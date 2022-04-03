// Crie três vetores:
    // vetorInteiro
    // vetorString
    // vetorDouble.
// Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console.
// Todos os elementos do vetor resultado deverão aparecer no console.

const vetorInteiro = [1, 2, 3, 4]
const vetorString = ['João', 'Paulo', 'Castro', 'Chaves']
const vetorDouble = [1.5, 2.5, 3.5, 4.5]

concatenaArray = (arr1, arr2, arr3) => {
    const resultado = []
    resultado.push(arr1.concat(arr2, arr3))
    console.log(resultado)
}
concatenaArray(vetorInteiro, vetorString, vetorDouble)
