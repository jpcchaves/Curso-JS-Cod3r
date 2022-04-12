// Ano bissexto (de novo?!?!)

const bissexto = ano => {
    if (ano % 4 === 0 && ano % 100 != 0){return true}
    if (ano % 100 === 0 && ano % 400 === 0){return true}
    if (ano % 100 === 0){return false} 
}
console.log('É bissexto?', bissexto(2020))
console.log(bissexto(2024))
console.log(bissexto(400))
console.log(bissexto(1200))
console.log('É bissexto?', bissexto(1900))
console.log(bissexto(2100))
