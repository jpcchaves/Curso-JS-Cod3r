// ESNext - ECMASCRIPT 6 e versões mais recentes

    // A criação das palavras reservadas LET e CONST para declarar variáveis
    {
        var a = 2
        let b = 3
        console.log(b) // não conseguimos acessar o B fora do bloco porque B tem escopo de bloco
    }
    console.log(a) // conseguimos acessar A porque A não tem escopo de bloco

    // Template String
    const produto = 'ipad'
    console.log(` ${produto} 
    é 
    caro
    `) 

    // Destructuring
    const [l, e, ...tras] = "Cod3r"
    console.log(l, e, tras)

    const [x, ,y] = [1,2,3]
    console.log(x,y)

    const {idade, nome} = {nome: 'Ana', idade: 9}
    console.log(idade, nome) 