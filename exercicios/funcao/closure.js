// Closure é o escopo criado quando uma função é declarada
// Esse escopo per,ote a função acessar e manipular variáveis externa a função

const x = 'Global';

function fora(){
    const x = 'Local' // closure
    function dentro(){
        return x // vai retornar a const x declarada no closure da função
    }
    return dentro
}

const minhaFuncao = fora();
console.log(minhaFuncao())
