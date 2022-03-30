// Class
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


const Criarpessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = Criarpessoa('João2')
p2.falar()
