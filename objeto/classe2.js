// Herança em Class

class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

// herança - a class Pai terá como protótipo a class Avo

class Pai extends Avo {
    constructor(sobrenome, profissao = "professor"){
        super(sobrenome) // quem é a super class de Pai? A class Avo!! vai chamar o constructor do Avo, o sobrenome do Avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva') // chama o construtor do pai
    }
}

const filho = new Filho // instanciando
console.log(filho)
