/* variável declarada com LET */

let numero1 = 1;

{
    let numero1 = 2;
    console.log(`Dentro: ${numero1}`); // imprime 2 - escopo interno
}
console.log(`Fora: ${numero1}`) // imprime 1 - escopo externo

//Let é delimitada ao escopo que foi declarada.