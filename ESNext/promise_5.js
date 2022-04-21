function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            // se o valor aleatório for menor do que chance de erro
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }
    })
}
funcionarOuNao('Testando', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    .catch(erro => console.log(`Erro: ${erro}`)) // tratando o erro
    .then(() => console.log(`Fim!!`))
