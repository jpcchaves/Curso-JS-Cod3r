// Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso.
// Use o comando switch.
// Crie um case default que escreva ‘Número fora do intervalo.’

leNumero = (num) => {
  switch (num) {
    case 0:
      return console.log(`zero`);
    case 1:
      return console.log(`um`);
    case 2:
      return console.log(`dois`);
    case 3:
      return console.log(`três`);
    case 4:
      return console.log(`quatro`);
    case 5:
      return console.log(`cinco`);
    case 6:
      return console.log(`seis`);
    case 7:
      return console.log(`sete`);
    case 8:
      return console.log(`oito`);
    case 9:
      return console.log(`nove`);
    case 10:
      return console.log(`dez`);
    default:
      return console.log(`Número fora do intervalo 0 - 10`);
  } 
};
leNumero(0);
leNumero(1);
leNumero(2);
leNumero(3);
leNumero(4);
leNumero(5);
leNumero(6);
leNumero(7);
leNumero(8);
leNumero(9);
leNumero(10);
leNumero(11);
leNumero(12);
leNumero(13);
leNumero(14);
leNumero(15);
