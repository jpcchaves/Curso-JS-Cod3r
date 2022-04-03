// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 
// A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade.
// A anuidade deve ser paga no mês de janeiro.
// Por mês, é cobrado 5% de juros (sob o regime de juros compostos). 
// O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

calculaAnuidade = (mes, valorAnuidade) => {
    const mesFinal = 12;
    const t = mesFinal - mes;
    const txJur = 0.05;
    let montante = valorAnuidade * Math.pow((1 + txJur), t);
    return console.log('R$', montante.toFixed(2))
}

calculaAnuidade(1, 1000)
calculaAnuidade(2, 1000)
calculaAnuidade(3, 1000)
calculaAnuidade(4, 1000)
calculaAnuidade(5, 1000)
calculaAnuidade(6, 1000)
calculaAnuidade(7, 1000)
calculaAnuidade(8, 1000)
calculaAnuidade(9, 1000)
calculaAnuidade(10, 1000)
calculaAnuidade(11, 1000)
calculaAnuidade(12, 1000)
