// Enunciado no PDF (muito longo e tem tabela)

// Criar uma função que receba o código do pedido e a quantidade
// Calcule o valor a ser pago por aquele lanche
// Usar switch
// Cria default

totalPedido = (codigo, qtde) => {
  let valorUnitario = 0;
  let totalPedido = 0;
  let descricao = "";
  switch (codigo) {
    case 100:
      valorUnitario = 3;
      descricao = "Cachorro Quente";
      totalPedido = qtde * valorUnitario;
      return console.log(
        `Você comprou ${descricao} e o total do seu pedido foi: R$ ${totalPedido.toFixed(2)}`
      );
    case 200:
      valorUnitario = 4;
      descricao = "Hamburguer Simples";
      totalPedido = qtde * valorUnitario;
      return console.log(
        `Você comprou ${descricao} e o total do seu pedido foi: R$ ${totalPedido.toFixed(2)}`
      );
    case 300:
      valorUnitario = 5.5;
      descricao = "Cheeseburguer";
      totalPedido = qtde * valorUnitario;
      return console.log(
        `Você comprou ${descricao} e o total do seu pedido foi: R$ ${totalPedido.toFixed(2)}`
      );
    case 400:
      valorUnitario = 7.5;
      descricao = "Bauru";
      totalPedido = qtde * valorUnitario;
      return console.log(
        `Você comprou ${descricao} e o total do seu pedido foi: R$ ${totalPedido.toFixed(2)}`
      );
    case 500:
      valorUnitario = 3.5;
      descricao = "Refrigerante";
      totalPedido = qtde * valorUnitario;
      return console.log(
        `Você comprou ${descricao} e o total do seu pedido foi: R$ ${totalPedido.toFixed(2)}`
      );
    case 600:
      valorUnitario = 2.8;
      descricao = "Suco";
      totalPedido = qtde * valorUnitario;
      return console.log(
        `Você comprou ${descricao} e o total do seu pedido foi: R$ ${totalPedido.toFixed(2)}`
      );
      default:
          return console.log(`Este produto não existe.`)
  }
};
totalPedido(100, 10);
totalPedido(200, 10);
totalPedido(300, 10);
totalPedido(400, 10);
totalPedido(500, 10);
totalPedido(600, 10);
totalPedido(700, 10);
totalPedido(800, 10);
totalPedido(900, 10);
totalPedido(2132100, 10);
totalPedido(432432, 10);
totalPedido(62321, 10);
totalPedido(602231220, 10);
