
let frase = "Eu sou João e tenho 24 anos"

function contarPalavras (palavra){
    const palavras = frase.split(" ")
    return palavras.length
}
console.log(contarPalavras(frase))
