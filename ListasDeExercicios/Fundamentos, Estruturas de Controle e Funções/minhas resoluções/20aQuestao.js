getRandomInt= (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const valorAleatorio = getRandomInt(1, 1000)
console.log(`Valor recebido: R$ ${valorAleatorio.toFixed(2)}`)

processaValor = valor => {
    let nota100 = 0, nota50 = 0, nota10 = 0, nota5 = 0, nota1 = 0.
    while (valor > 0) {
        if (valor % 100 == 0){
            valor -= 100
            nota100++
        } else if (valor % 50 == 0){
            valor -= 50
            nota50++
        } else if (valor % 10 == 0){
            valor -= 10
            nota10++
        } else if (valor % 5 == 0){
            valor -= 5
            nota5++
        } else if (valor % 1 == 0){
            valor -= 1
            nota1++
        }
    }
    console.log("===== NOTAS UTILIZADAS =====")
    if (nota100 != 0){console.log(`Você usou ${nota100} nota(s) de R$ 100.00`)}
    if (nota50 != 0){console.log(`Você usou ${nota50} nota(s) de R$ 50.00`)}
    if (nota10 != 0){console.log(`Você usou ${nota10} nota(s) de R$ 10.00`)}
    if (nota5 != 0){console.log(`Você usou ${nota5} nota(s) de R$ 5.00`)}
    if (nota1 != 0){console.log(`Você usou ${nota1} nota(s) de R$ 1.00`)}

}
processaValor(valorAleatorio)
