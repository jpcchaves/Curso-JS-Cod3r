// Arrow Function
const soma = (a, b) => a + b //return implicito
console.log(soma(2,3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parâmetro Default
function log(texto = 'Node'){
    return texto
}
console.log(log())

// Operador rest (agrupar)
function total(...nums){
    let total = 0
    nums.forEach(n => total += n)
    return console.log(total)
}
total(1,2,3,4,5)
