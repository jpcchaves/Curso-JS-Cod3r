//For IN
const notas = [6.7, 7.4, 9.8, 7.7, 7.3, 6.8];

//Varrendo um ARRAY

for (let i in notas){
    console.log(i, notas[i])
}

//Varrendo um objeto

const pessoa = {
    nome: 'Joao',
    sobrenome: 'Paulo',
    idade: 24,
    peso: 80
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
