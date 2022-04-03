// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

leVetor = (vetor) => {
  let pares = 0;
  let vetorP = [];
  let impares = 0;
  let vetorI = [];
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 == 0) {
      vetorP.push(vetor[i]);
      pares++;
    } else if (vetor[i] % 2 != 0) {
      vetorI.push(vetor[i]);
      impares++;
    }
  }
  console.log("Quantidade de números pares:", pares);
  console.log("Números pares:", vetorP);
  console.log("Quantidade de números ímpares:", impares);
  console.log("Números ímpares:", vetorI);
};
leVetor(numeros);
