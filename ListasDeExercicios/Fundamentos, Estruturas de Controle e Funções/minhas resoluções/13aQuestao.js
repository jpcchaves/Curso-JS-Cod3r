// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia.
// Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

let data = new Date();
let dia = data.getDay();

util = (dia) => {
  switch (dia) {
    case 0:
      console.log("Domingo");
      break;
    case 1:
      console.log("Segunda-Feira");
      break;
    case 2:
      console.log("Terça-Feira");
      break;
    case 3:
      console.log("Quarta-Feira");
      break;
    case 4:
      console.log("Quinta-Feira");
      break;
    case 5:
      console.log("Sexta-Feira");
      break;
    case 6:
      console.log("Sábado");
      break;
  }
  if (dia === 0 || dia === 6) {
    return console.log(`Final de Semana`);
  } else if (dia >= 1 || dia <= 5) {
    return console.log(`Dia Útil`);
  } else {
    return console.log(`Data Inválida`);
  }
};
util(dia);
util(0);
util(6);
util(1);
util(2);
util(3);
util(4);
util(5);
