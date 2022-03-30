// Função construtora.
// Delta = velocidade de aceleração
function Carro(velocidadeMaxima = 200, delta = 5){
    // Atributo privado
    let velocidadeAtual = 0;

    // Metodo Público
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}
// Primeira Instância
const uno = new Carro // instanciando - sem parâmetros
uno.acelerar() // adiciona o valor de Delta
console.log(uno.getVelocidadeAtual())

// Segunda Instância
const ferrari = new Carro(350, 20) // instanciando - com parâmetros
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar() // Adiciona o valor de Delta a cada chamada
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

// Elementos
    // Function - funciona como classe (molde), e a partir desse molde você pode criar quantos objetos você quiser com os dados internos da função
    
console.log(typeof Carro) // function
console.log(typeof uno) // objeto instanciado
console.log(typeof ferrari) // objeto instanciado
