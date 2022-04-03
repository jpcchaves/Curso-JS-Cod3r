// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro.
// Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro.
// A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.

//Primeira Função
retornaVetor1 = (vetor1, num1) => {
  const resultado = [];
  for (let i = 0; i < vetor1.length; i++) {
    let multiplicado = vetor1[i] * num1;
    resultado.push(multiplicado);
  }
  return resultado;
};
const vetor2 = retornaVetor1([1, 2, 3], 3);
console.log(vetor2);

// Segunda Função

retornaVetor2 = (vetor1, num1) => {
  const resultado = [];
  for (let i = 0; i < vetor1.length; i++) {
    if (vetor1[i] > 5) {
      let multiplicado = vetor1[i] * num1;
      resultado.push(multiplicado);
    }
  }
  return resultado;
};
console.log(retornaVetor2([1,3,5,6,7,8,9], 1))
