// Cadeira de protótipos
// prototype chain
Object.prototype.atrib0 = '231432432' // não recomendado
const avo = {atrib1: "A"}
const pai = {__proto__: avo, atrib2: "B"}
const filho = {__proto__: pai, atrib3: "C"}

// Explicação: o filho tem o protótipo do pai, o pai tem o protótipo do avô e o avô tem o protótipo do Object.prototype.

console.log(filho.atrib1) // o filho não tem o atributo1, porém, ele é protótipo do pai, que é protótipo do avô. Ou seja, o leitor do JS sai procurando nos protótipos acima em busca do atributo chamado (atrib1) localizado no avô

console.log(filho.atrib0)
console.log(filho.atrib1)
console.log(filho.atrib2)
console.log(filho.atrib3)

// Exemplo
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 // essa velocidade máxima vai sombrear a velocidade máxima do protótipo carro
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` // Sombreando a função
    }
}

// Definindo a relação de prototype
// objeto , prototype
Object.setPrototypeOf (ferrari, carro) // ferrari tem carro como seu protótipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)
// Chamando as funções (métodos)
volvo.acelerarMais(99)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
