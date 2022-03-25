const a = {
    name: "Teste"
}
console.log(typeof a)
console.log(a)


//atribuição por referência
const b = a; // eles apontam para o mesmo lugar na memória, o mesmo endereço
b.name = 'Opa';
console.log(b);

//atribuição por referência
// eles apontam para o mesmo lugar na memória
// por ser um valor PRIMITIVO,  
let c = 3;
let d = c;
d++;
console.log(c, d)

/* ====== UNDEFINED ======  */

    //Significa que a variável foi inserida, porém, não aponta para lugar nenhum da memória

let valor //não inicializada
console.log(valor) // undefined


/* ====== NULL ======  */

    //Significa que a variável foi inserida, e aponta um valor nulo (vazio);
    //Recomendado: usar quando for preciso zerar o valor de uma variável

let valor2 = null;
console.log(valor2)

//Null sendo boolean é considerado FALSE

console.log(!!valor2);
console.log(!!valor2 == false);