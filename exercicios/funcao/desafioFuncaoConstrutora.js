//Desafio: transformar a classe abaixo em uma função construtora.

class Pessoa {
    constructor(nome){
        this.nome = nome

    }
    
    falar(){
        console.log(`Meu nome é ${this.nome}`) // this => objeto instanciado
    }
}

const p1 = new Pessoa('João')
p1.falar()

// ===== RESOLUÇÃO =====

function Pessoa2 (nome){
    // Atributo privado
    this.nome = nome

    // Método Público
    this.imprimeNome = function(){
        console.log(`Seu nome é ${this.nome}`)
    }

}
const pessoa1 = new Pessoa2('Zezinho')
pessoa1.imprimeNome()
pessoa1.imprimeNome()
pessoa1.imprimeNome()
pessoa1.imprimeNome()

console.log(pessoa1.nome)