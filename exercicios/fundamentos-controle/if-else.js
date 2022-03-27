imprimirResultado = nota => {
    if (nota >= 7) {
        console.log(`Aprovado com nota ${nota}`)
    } else {
        console.log(`Reprovado com nota ${nota}`)
    }
}
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado('Epa') // cuidado com esse tipo de comportamento
