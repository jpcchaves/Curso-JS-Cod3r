// Object.create
// for in para percorrer objeto

const pai = {
    nome: 'Pedro',
    corCabelo: "preto"
}

// Criou o objeto novo a partir do protótipo pai
const filha1 = Object.create(pai)
filha1.nome = "Patricia"
console.log(filha1)
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: "Bia", enumerable: true, writable: false}
})
console.log(filha2.nome)
filha2.nome = 'Carla' // Não altera porque é writable: false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// FOR IN
for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança ${key}`)
}


