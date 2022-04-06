const pessoa = {
    nome: 'Receba',
    idade: 23,
    peso: 60
}
// Pegando as chaves do objeto
console.log(Object.keys(pessoa))

// Pegando os valores do objeto
console.log(Object.values(pessoa))

// Pegando array com chaves e valores
console.log(Object.entries(pessoa))

    // Percorrendo esse array
    Object.entries(pessoa).forEach(e => {
        console.log(`${e[0]}: ${e[1]}`)
    })

    // Outra forma:
    Object.entries(pessoa).forEach(([chave, valor]) => {
        console.log(`${chave}: ${valor}`)
    })

// Função que define propriedades => caracteristicas das propriedades (pode ou não ser altera? ficara ou não visível quando chamarmos o object.keys) 
//                     alvo     chave
Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true, // vai ser listado?
    writable: false, // não pode ser alterada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object Assign

const dest = {a: 1}
const o2 = {b: 2}
const o3 = {c: 3, a: 4}
// No object.assign, você passa o objeto de destino e depois passa quais objetos serão atribuidos a ele: dest recebe os objetos o2 e o3 (são concatenados)
// ele sempre sobresceve e coloca o último valor declarados 
const obj = Object.assign(dest, o2, o3)
console.log(obj)

//exemplo com freeze
Object.freeze(obj)
obj.c = 1234
console.log(obj)

