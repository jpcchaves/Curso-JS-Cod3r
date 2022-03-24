let isAtivo = false;
console.log(isAtivo); // false

isAtivo = true;
console.log(isAtivo); // true

//transformando um numero em boolean
isAtivo = 1;
console.log(!!isAtivo); // true

isAtivo = 0;
console.log(!!isAtivo); // false

//Numeros verdadeiros
console.log("Os verdadeiros...:")
console.log(!!3)
console.log(!!-1)
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo == false)) // inverte o valor

console.log("Os falsos...:")
console.log(!!0)
console.log(!!'') // vazio
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo == true))

console.log("Para finalizar...:")
console.log(!!('' || null || 0 || ` `));

//Atribuindo a uma variável em operações lógicas

let nome = ''; //retorna false porque é um texto vazio
console.log(nome || 'Desconhecido');

let nome2 = 'Joãozin'; // retorna true, escreve o nome2
console.log(nome2 || 'Desconhecido');