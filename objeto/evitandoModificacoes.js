// Object.preventExtension: evita que novos atributos sejam adicionados ao objeto (porém, ainda permite que atributos sejam deletados)

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))
console.log(produto)

produto.nome = 'borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal: quando selamos, não conseguimos adicionar, nem deletar atributos. Mas, conseguimos modificar valores dos atributos existentes.
const pessoa = {nome: 'Joao', idade: 24}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
console.log(pessoa)

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 65
console.log(pessoa)


// Object.freeze => os valores são constantes e ele é selado
