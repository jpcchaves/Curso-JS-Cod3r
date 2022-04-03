// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

calculaMedia = (vetor) => {
  let soma = 0;
  let qtde = vetor.length
  let media = 0;
  for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
  }
  media = soma/qtde
  console.log(media)
};
calculaMedia(num);
