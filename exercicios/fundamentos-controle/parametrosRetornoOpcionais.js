// Parametros e retornos são opcionais

function soma(a, l){
    let soma = a * l;
    if (soma > 20){
        console.log(`Área inválida!! ${soma}`)
    } else {
        return soma
    }
}

console.log(soma(1,2))
console.log(soma(2,3))
console.log(soma(5,5)) // vai retornar o console.log e undefined que surgiu do Else, visto que o else não foi executado.
console.log(soma(1,2,3,4,5,6,7))
