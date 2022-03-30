//Funçao anônima = sem nome
const soma = function (x,y){
    return x + y
}
                                        //valor padrão do parâmetro operação = soma
const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a,b)) // como foi passado apenas o terceiro parâmetro, ele assume a função soma() e retorna o resultado
}

imprimirResultado(3,4)
imprimirResultado(3,4, soma)
//função anônima passada na chamada da função
imprimirResultado(3,4, function(x ,y){
    return x - y
})

//Função anônima dentro de um obj

const pessoa = {
    falar: function(){
        console.log('Opa')               
    }
}
pessoa.falar()
