require('./global')

console.log(global.minhaApp.saudacao())

// Não será atribuido porque usamos o Object.freeze 
minhaApp.nome = 'Eita!'
console.log(minhaApp.nome)
