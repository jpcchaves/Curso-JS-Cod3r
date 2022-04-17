// ES8: Object.values // Object.entries
    // Object.values => pega os valores do objeto
    // Object.entries => retorna um array chave|valor (retorna uma matriz)

const obj = {a: 1, b:2, c:3}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação literal
    const nome = "João"
    const pessoa = {
        nome,
        ola(){
            return 'AAAAAAAAAA'
        }
    }
    console.log(pessoa.nome, pessoa.ola())

// Class: é convertida em função
class Animal {}
class Cachorro extends Animal {
    //herança
    falar(){
        return "Au Au!"
    }
}
console.log(new Cachorro().falar())
