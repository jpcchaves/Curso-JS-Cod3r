// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

const maiorMenor = (num1, num2) => {
  if (num1 >= num2) {
    return true;
  } else {
    return false;
  }
};
console.log(maiorMenor(0,0))
console.log(maiorMenor(2,1))
console.log(maiorMenor(1,1))
console.log(maiorMenor(1,2))
