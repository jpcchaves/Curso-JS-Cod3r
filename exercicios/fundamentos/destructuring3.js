//passando um objeto como parâmetro
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.round(valor)
}
const obj = {max: 50, min: 40}; 
console.log(rand(obj)); 

console.log(rand({min: 955}))

//passando um objeto vazio
console.log(rand({})) // pega entre 0 e 1000