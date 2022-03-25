//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a+b);
}
imprimirSoma(2, 3)

//função com retorno
function soma(a, b = 1){
    return a + b;
}
console.log(soma(2,3)) // soma
console.log(soma(2)) // b assume o valor padrão "b = 1"
console.log(soma()) // NaN porque não foi passado nenhum número
