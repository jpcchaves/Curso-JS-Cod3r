// CÓDIGO NÃO EXECUTÁVEL

// Paradigma procedural
    //Foco em funções que manipulam dados
    //Ex:
    processamento(valor1, valor2, valor3)

// O.O
    //Não é mais focado em funções
    //É focado em dados, e dentro desses dados temos funções
    //Ex:
    objeto = {
        //dentro do objeto temos dados
        valor1,
        valor2,
        valor3,
        //e as funções
        processamento() {
            // ....
        }
    }
objeto.processamento() // o foco passou a ser o objeto

// O objeto funciona como capsula que comporta os atributos e comportamentos     
// Esses objetos se relacionam uns com os outros

// Principios importantes

    // 1. ABSTRAÇÃO: pegar um objeto do mundo real e entender como traduzir esse objeto para o nosso programa
        // ex: carro: 
            // Atributos: o carro tem peso, largura, altura, velocidade máxima, velocidade atual, portas, motor

            // Métodos: ligar(), desligar(), acelerar(), ligarSom() 

    // 2. ENCAPSULAMENTO: são os detalhes internos e que não deve ser refletivo para fora
        // ex: é melhor todos correrem de mãos dadas ou de mãos soltas? De mão soltas!!!!!!!
        // Diminui o nível de dependência

    // 3. HERANÇA: É quando um objeto recebe atributos e comportamentos de um objeto pai
        // ex: um objeto pai, herda para o filho. se esse filho possuir algum objeto interno, o filho desse objeto herda as caracteristicas dele.
        
        // ex: pai: carro; filho: fiat.
        // ex: pai: carro; filho ferrari.
        // Eles herdam as mesmas caracteristicas do objeto pai: CARRO. 
        

    // 4. POLIMORFISMO: Multiplas formas
        // Ex: objeto celular
            // A partir desse objeto, podemos apontar para vários modelos/formas de celulares (iphone, samsung, xiaomi, motorola)
            