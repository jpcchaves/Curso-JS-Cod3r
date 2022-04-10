// Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

nomeDoMes = num => {
    if (num < 0 || num > 12){ return `Insira um mês válido.`}
    if (num == 1){ return `Janeiro`}
    if (num == 2){ return `Fevereiro`}
    if (num == 3){ return `Março`}
    if (num == 4){ return `Abril`}
    if (num == 5){ return `Maio`}
    if (num == 6){ return `Junho`}
    if (num == 7){ return `Julho`}
    if (num == 8){ return `Agosto`}
    if (num == 9){ return `Setembro`}
    if (num == 10){ return `Outubro`}
    if (num == 11){ return `Novembro`}
    if (num == 12){ return `Dezembro`}
}
console.log(nomeDoMes(-1))
console.log(nomeDoMes(13))
console.log(nomeDoMes(1))
console.log(nomeDoMes(2))
console.log(nomeDoMes(3))
console.log(nomeDoMes(4))
console.log(nomeDoMes(5))
console.log(nomeDoMes(6))
console.log(nomeDoMes(7))
console.log(nomeDoMes(8))
console.log(nomeDoMes(9))
console.log(nomeDoMes(10))
console.log(nomeDoMes(11))
console.log(nomeDoMes(12))
