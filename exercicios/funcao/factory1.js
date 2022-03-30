//Função Factory é uma função que retorna um objeto
//Evita o problema de ter que criar vários objetos manualmente

function criarPessoa(){
    return {
        nome: 'João',
        sobrenome: 'Paulo'
    }
}
//Cria uma instância nova a cada chamada da função
//Ela fabrica uma instância de um objeto
console.log(criarPessoa())
