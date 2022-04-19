const { set } = require("lodash")

// Estrutura não indexada e não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('Framengo').add('Parmera').add('Popoti')
times.add('Vasco') // vai ser ignorado porque não aceita repetição

console.log(times)

console.log(times.size) // retorna o tamanho do set

console.log(times.has('Vasco')) // retorna true ou false caso o elemento se encontre no HAS

times.delete('Framengo') // deleta um elemento do set
console.log(times)


// Criando um Set a partir de um array
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
