// É uma função que possui uma callback anônima com o parâmetro resolve e o reject. Ela será chamada quando a promise declarada for ou não atendida.
// Se for true, chama o resolve.
// Se for false, chama o reject.

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        // Quando o setTimeout for atendido, ele chamará o resolve
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}
falarDepoisDe(3 , 'Eu me chamo João?!\n')
    //Podemos encadear várias chamadas de .then, e elas vão sendo acumuladas e passadas para os próximos thens
    .then(frase => frase.concat(' A promise foi chamada\n'))
    .then(outraFrase => outraFrase.concat(' Encadeou mais um then!\n'))
    .then(outraFrase => outraFrase.concat(' Encadeou mais um then!\n'))
    .then(outraFrase => outraFrase.concat(' Encadeou mais um then!\n'))
    .then(outraFrase => outraFrase.concat(' Encadeou mais um then!'))
    .then(outraFrase => console.log(outraFrase))
