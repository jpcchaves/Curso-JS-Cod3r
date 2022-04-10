// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array.

novoArray = Arr => {
    let resultado = []
    let ultimo = Arr.pop()
    let primeiro = Arr.shift()
    resultado.push(primeiro, ultimo)
    return resultado
}
console.log(novoArray([7,14,'Olá']))
