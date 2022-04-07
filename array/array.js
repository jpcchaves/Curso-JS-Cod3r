// Array é uma função ????????
// new Array - instancia um objeto
console.log(typeof Array, typeof new Array, typeof [])

const aprovados = ['João']
console.log(aprovados)
// Métodos importantes array
    // Adicionando a um indice específico
    aprovados[1] = 'Zezinho'
    console.log(aprovados)
    
    // Adicionando com push() - adiciona no último índice
    aprovados.push('Pedro', 'Amigo', 'Bruno')
    console.log(aprovados)
    
    // Ordenando de A-Z e MENOR -> MAIOR
    aprovados.sort()
    console.log(aprovados)
    
    // Deletando elementos
    delete aprovados[1]
    console.log(aprovados)
    
    // Splice - adiciona, remove e adiciona e remove ao mesmo tempo
    aprovados.splice(1, 1, 'adicionado1', 'adicionado2', 'adicionaQuantosQuiser')
    console.log(aprovados)

    //splice(indice selecionado, qtde de elementos que serão deletados a partir do indice selecionado, elementos adicionados)
    