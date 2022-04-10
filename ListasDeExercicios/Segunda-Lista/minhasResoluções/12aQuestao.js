// Escrever uma função que recebe um objeto e o nome de uma propriedade contida nesse objeto como parâmetros. Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro.

const objetoExemplo = {
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}

// Metodo para extrair
extraiProp = (obj, nomeDaProp) => {
    //                         alvo, obj a ser copiado
    const copia = Object.assign({}, obj) // contrutor de obj
    delete copia[nomeDaProp] // delete
    
    // retorna a cópia sem a propriedade deletada
    return copia
}
console.log(extraiProp(objetoExemplo, "descricao"))
