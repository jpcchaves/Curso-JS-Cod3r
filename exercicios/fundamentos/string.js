const escola = "cod3r";
console.log(escola.charAt(4));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('d'));

console.log(escola.substring(1)); //vai imprimir do indice 1 pra frente
console.log(escola.substring(0, 3)); //imprime os indices entre 0 e 3 (0 e 3 não inclusos)

console.log(escola.replace(3, 'e')); // substitui o número 3 pela letra "e"

console.log('Ana,Maria,Pedro'.split(',')); // criando um array a partir de uma string