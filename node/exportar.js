// 

console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 // fica visível fora do arquivo
exports.b = 2
module.exports.c = 3

// O exports não muda o retorno 
exports = null
console.log(module.exports)

// O exports só muda o retorno caso seja atribuido da seguinte forma:
module.exports = {
    nome: "João",
    publico: true 
}

