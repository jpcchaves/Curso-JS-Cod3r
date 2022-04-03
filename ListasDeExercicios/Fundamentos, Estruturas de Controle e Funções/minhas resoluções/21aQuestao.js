// Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela:
// 1) crianças com menos de 10 anos pagam R$80;
// 2) conveniados com idade entre 10 e 30 anos pagam R$50;
// 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
// 4) conveniados acima de 60 anos pagam R$130

calculaValor = (idadeConveniado) => {
  let valorPadrão = 100;
  if (idadeConveniado < 0 || isNaN(idadeConveniado) != false || typeof idadeConveniado === "string"){
      return console.log("Insira uma idade válida.")
  } else if (idadeConveniado >= 0 && idadeConveniado <= 10){
      return console.log("O valor a ser pago é R$", (valorPadrão += 80))
  } else if (idadeConveniado > 10 && idadeConveniado <= 30){
      return console.log("O valor a ser pago é R$", valorPadrão += 50)
  } else if (idadeConveniado > 30 && idadeConveniado <= 60){
      return console.log("O valor a ser pago é R$", valorPadrão += 95)
  } else if (idadeConveniado > 60){
      return console.log("O valor a ser pago é de R$", valorPadrão += 130)
  } else {
      return console.log("[ERRO] Idade inválida!!")
  }
};
calculaValor('7')
calculaValor('ALO ALO')
calculaValor('teste')
calculaValor(-1)
calculaValor(0)
calculaValor(5)
calculaValor(10)
calculaValor(11)
calculaValor(25)
calculaValor(30)
calculaValor(31)
calculaValor(40)
calculaValor(60)
calculaValor(61)
calculaValor(65)
calculaValor(70)
calculaValor(80)
calculaValor(90)
