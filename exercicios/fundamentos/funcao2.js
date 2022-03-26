//Armazenando uma função em uma constante
const imprimeSoma = function (a,b){
    console.log(a + b);
}
imprimeSoma(2,4);


//Armazaenando uma arrow function em uma constante

const arrowSoma = (a,b) => {
    return a + b;
}
console.log(arrowSoma(3,6));


//Retorno implícito

const arrowSoma2 = (a,b) => a + b;
console.log(arrowSoma2(6,12))

//Retorno implícito com um parâmetro apenas
const arrowMostraA = a => a;
console.log(arrowMostraA('oiii '))