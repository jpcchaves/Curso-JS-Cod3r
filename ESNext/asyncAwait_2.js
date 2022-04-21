// Function com num aleatório e sem repetição

function gerarNumEntre (min, max, numerosProibidos){
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNums){
    
    try {
    const numeros = []
    for (let _ of Array(qtdeNums).fill()){
        numeros.push(await gerarNumEntre(1, 60, numeros))   
    }
    return numeros
    } catch(e){
        throw 'Que chato!'
    }
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)
