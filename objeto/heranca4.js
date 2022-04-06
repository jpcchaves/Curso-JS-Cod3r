function meuObjeto () {
    console.log(meuObjeto.prototype)
}
const obj1 = new meuObjeto
const obj2 = new meuObjeto
// Os objetos a partir de uma mesma função construtora apontam para o mesmo protótipo a partir do atributo __proto__
console.log(obj1.__proto__ === obj2.__proto__)

// Qualquer objeto que for criado a partir dessa função vai ter no pai dele o atributo nome
meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}
obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()


const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// RESUMO
console.log((new meuObjeto).__proto__ === meuObjeto.prototype)

console.log(meuObjeto.__proto__ === Function.prototype)

console.log(Function.prototype.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__ === null)
