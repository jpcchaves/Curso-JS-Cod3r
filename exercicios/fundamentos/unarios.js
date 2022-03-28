//Operadores unários
let num1 = 1;
let num2 = 2;

//pós fixado
num1++
console.log(num1)

//préfixado
--num1
console.log(num1)

//             2       2 (decremento = 1)
console.log(++num1 === num2--)
//true, porque um está PRÉ fixado e o outro PÓS. O leitor do JS vai ler o NUM2 antes de fazer o decremento.