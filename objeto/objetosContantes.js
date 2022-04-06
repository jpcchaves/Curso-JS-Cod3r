// Nós podemos atribuir valores ao objeto declarado com uma constante porque não estamos alterando o espaço na memória que a constante aponta. Estamos mudando apenas o dado contido dentro do espaço na memória.    

// pessoa -> espaço na memoria -> dado
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// Caso tentarmos reatribuir outro objeto para a constante, teremos erro
// pessoa = {nome: 'Ana'}

// Como congelar um objeto?
Object.freeze(pessoa)

// Se congelarmos o objeto, não podemos mais atribuir nada a ele
pessoa.nome = 'Zezinho'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome
console.log(pessoa) // o nome continua sendo Pedro
