//Comparação de valor
console.log('01)', '1' == 1);

    //Por o JS ser uma linguagem fracamente tipada, ele retorna positivo visto que comparou apenas o valor, e não o tipo do dado.

//Comparação de valor e data type
console.log('02)', '1' === 1);
// Retorna false visto que está comparando o valor e o tipo.
// O valor é igual, mas os dados são diferentes. Um é string, e o outro é Number

console.log('03)', '3' != 3);
console.log('04)', '3' !== 3);

//Maior e menor

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);

//Maior,menor ou igual

console.log('07)', 3 >= 2);
console.log('08)', 3 <= 2);


//Comparando data
const d1 = new Date(0);
const d2 = new Date(0);
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() == d2.getTime())

//Undefined e Null
console.log('12)', undefined == null)
console.log('13)', undefined === null)
