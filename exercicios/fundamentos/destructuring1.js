// recurso novo no ES2015

//destructuring - OBJ

const pessoa = {
    nome: 'João',
    idade: 24,
    endereco:{
        logradouro: 'Melhor rua da cidade',
        bairro: 'Melhor bairro da cidade',
        numero: 08
    }
}

//Como acessar algum elemento do objeto?
//Operador de desestruturação { }
const { nome, idade } = pessoa; // tire de dentro do objeto o atributo nome e idade
console.log(nome, idade)

//atribuindo a outras variáveis: "n", "i"
const { nome: n, idade: i} = pessoa;
console.log(n, i);

//acessando um objeto dentro de um objeto
const { endereco: {logradouro: rua, numero: numCasa}} = pessoa;
console.log(rua, numCasa)