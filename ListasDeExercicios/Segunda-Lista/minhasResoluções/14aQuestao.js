// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os exemplos abaixo para um melhor entendimento

let obj1 = {
    nome: "Maria",
    profissao: "Desenvolvedora de Software"
}

let obj2 = {
    codigo: 11111,
    preco: 12000
}

// Minha solução
objectToArray = obj => {
    let resultado = []
    let valores = Object.values(obj)
    let chaves = Object.keys(obj)
    resultado.push(valores, chaves)
    return resultado
}

console.log(objectToArray(obj1))


// Soluções do professor
function objetoParaArray (objeto) {
    return Object.entries(objeto)
}
console.log(objetoParaArray(obj2))


function objetoParaArray2 (objeto){
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chave => [chave, objeto[chave]])
    return resultado
}
console.log(objetoParaArray2(obj1))
