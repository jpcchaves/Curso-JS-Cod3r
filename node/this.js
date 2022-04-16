// o THIS aponta para o module.exports

console.log(this === global) // false, porque o this aponta para o module.exports
console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma função...')
    // No caso abaixo, retorna false porque está englobado pelo escopo da função
    console.log(this === exports)
    console.log(this === module.exports)

    // Dentro de uma função inserida em um módulo, o this aponta para o global 
    console.log(this === global)

    // Ou seja, se fizermos uma atribuição usando this, quem receberá é o objeto global:
    this.perigo = "isso ficará visível no global"
} 
logThis()
