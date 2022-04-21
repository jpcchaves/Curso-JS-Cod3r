// 

const numBetween = (min, max) => {
    // Evitando que o min seja maior que o max
    if(min > max) {
        [max, min] = [min, max] // destructuring
    }
    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
    })
}
numBetween(1, 60) // gerei um valor
    .then(num => num * 10) // multipliquei por 10
    .then(numX10 => `O número gerado foi ${numX10}`) // criei um texto
    .then(texto => console.log(texto)) // mostrei o texto
