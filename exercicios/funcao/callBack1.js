const fabricantes = ["FIAT", "HONDA", "BMW"];

//Função call-back

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
  
fabricantes.forEach(imprimir) // forEach() -> função especifica para arrays
//com a função forEach passando a função "imprimir" como parâmetro, vai ser executada a função para cada elemento do array

//função anônima dentro de forEach() passando o fabricantes como parâmetro
fabricantes.forEach(fabricantes => console.log(fabricantes)) //retornou o nome de cada fab