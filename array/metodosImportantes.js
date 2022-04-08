// metodos importantes de array

const pilotos = ['Vettel', 'Alonso', 'Raiiadasd', 'Passa']
console.log(pilotos)

// Método .pop() => remove o último elemento do array
pilotos.pop()
console.log(pilotos)

// Método .push('elemento') -> adiciona um elemento na última posição
pilotos.push('Barrichelo')
console.log(pilotos)

// Método .shift( ) -> remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

// Métodos .unshift() -> adiciona um elemento na primeira posição
pilotos.unshift('UmPiloto')
console.log(pilotos)

// Método .splice('indice selecionado', 'indice excluído', 'valores adicionados')
// QUANDO TIVER 0 NO "INDICE EXCLUÍDO", SIGNIFICA QUE NENHUM SERÁ EXCLUÍDO
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Removendo com Splice
pilotos.splice(3,1)
console.log(pilotos)

// Método .slice() -> retorna um novo array
const algunsPilotos1 = pilotos.slice(2)
    // Cria um novo array a partir do índice 2
console.log(algunsPilotos1)


const algunsPilotos2 = pilotos.slice(1, 5) // pega o intervalo de 1 até o 4, porém, o 4 não entra no array
console.log(algunsPilotos2)
