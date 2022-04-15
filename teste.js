const notas = [1.1, 2.5, 7, 4, 8, 9.8, 4.5, 6]
const notas2 = [5,5,5,5,5,5]

const getAprovados = num => num >= 7
const soma = (initNum, currentNum) => initNum+currentNum

const somaDasNotas = notas2.reduce(soma)
console.log(notas.filter(getAprovados))
console.log(somaDasNotas)

function calculaMedia (soma, qtdeNums) {
    const qtde = qtdeNums.length
    const media = soma / qtde
    return media
}
console.log(calculaMedia(somaDasNotas, notas2))







