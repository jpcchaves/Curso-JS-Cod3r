// Fazer um programa para encontrar todos os pares entre 1 e 100.

encontraPar = () => {
    let pares = []
    let impares =[]
    for (let i = 1; i <= 100; i++){
        if (i % 2 == 0) {
            pares.push(i)
        } else {
            impares.push(i)
        }
    }
    console.log(pares)
    console.log(impares)
}
encontraPar()
