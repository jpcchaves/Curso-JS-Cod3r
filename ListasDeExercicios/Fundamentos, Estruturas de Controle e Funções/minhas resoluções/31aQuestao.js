// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

const num = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0 , 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

leVetor = vetor => {
    let negativos = 0;
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < 0){
            negativos++
        }
    }
    console.log("Quantidade de negativos:", negativos)
}
leVetor(num)
