
function identificaSemelhantes (inicio, palavras){
    const resultado = []

    for (let palavra of palavras){
        if (palavra.includes(inicio))
        resultado.push(palavra)
    }
    return resultado
}
console.log(identificaSemelhantes("java", ["java", "javascript", "phyton"]))

