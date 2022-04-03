// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. 
// Utilize centímetros para as unidades de medida.

calculaAltura = (altura1, tx1, altura2, tx2) => {
    let alturaFinal1 = altura1 * tx1;
    alturaFinal1 += altura1
    let alturaFinal2 = altura2 * tx2;
    alturaFinal2 += altura2

    let tempo = 0;
    if (alturaFinal1 != alturaFinal2 && tx1 < tx2){
        while (tx2 > tx1){
            tx1 += 0.01
            tempo++
        }
        tx1 = tx1.toFixed(1)
        console.log(tempo, tx1, tx2)
    }
    console.log(`
        A criança menor tem ${altura1} e a maior tem ${altura2}
        A taxa de crescimento da menor é ${tx1} e da maior é ${tx2}
        Para a criança menor alcançar a altura da maior, levaria ${tempo} anos
        `)
}
calculaAltura(50, 0.05, 100, 0.10)
