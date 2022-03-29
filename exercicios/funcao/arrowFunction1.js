// função padrão
let dobro = function (a) {
    return 2 * a
}
// arrow function
dobro = (a) => { return 2*a}
    //A arrow function é mais reduzida e possui um this associado ao contexto que a função foi escrita

    //por ser uma função anônima, ela precisa ser armazenada em uma variável para ser chamada posteriormente

//arrow function com um único parâmetro e *retorno implícito*
dobro = a => 2*a

//arrow function em armazenada em uma variável
let dobro2 = (a) => {return}
