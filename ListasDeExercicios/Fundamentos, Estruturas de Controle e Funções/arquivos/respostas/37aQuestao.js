// Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros:
//  um número n (número de termo)
// a1 (o primeiro termo)
// r (a razão)
// escreva os n termos , bem como a soma dos elementos.

progressaoArit = (n, a1, r) => {
    let an = a1 + ((n - 1) * r)
    let sn = n * ((a1 + an)/2)
    return console.log(`${an} ${sn}`)
}
progressaoArit(16, 4, 3)


progressaoGeo = (n, a1, r) => {
    let an = a1 * (Math.pow(r, n - 1))
    let sn = a1 * (Math.pow(r,n) - 1) / (r -1)
    return console.log(an, sn)
}
progressaoGeo(16, 4, 3)
