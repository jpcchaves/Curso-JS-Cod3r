// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
// A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

const jurosSimples = (capInit, txJur, t) => {
    let montante = capInit * txJur * t
    console.log('RS', montante.toFixed(2))
}
jurosSimples(1000, 0.0076, 12)
jurosSimples(2000, 0.0076, 12)
jurosSimples(3000, 0.0076, 12)
jurosSimples(4000, 0.0076, 12)
