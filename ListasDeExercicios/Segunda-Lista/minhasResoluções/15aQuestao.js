// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.

let array1 = [1, 2, 3, 4, 5, 6, 7, 9, 10, 22, 12];

function filtraArray(array1) {
  let result = [];
  array1.forEach(function (valor, indice) {
    if (valor % 2 == 0 && indice % 2 == 0) {
      result.push(valor)
    }
});
return result;
}
console.log(filtraArray(array1));
