// Um objeto é uma coleção dinâmica de pares chave/valor

const prod = new Object(); //instanciando um objeto a partir de uma função construtora
prod.nome = "Cadeira";
prod["marca do produto"] = "Generica ";
prod.preco = 220;

console.log(prod);
// Excluindo atributo de um objeto
delete prod.preco;
delete prod["marca do produto"];
console.log(prod);

const carro = {
  modelo: "A4",
  valor: 89000,
  proprietario: {
    nome: "Raul",
    idade: 56,
    endereco: {
      logradouro: "Rua ABC",
      numero: 123,
    },
  },
  //objeto condutores com array que contém objetos ref. aos condutores
  condutores: [
    {
      nome: "Junior",
      idade: 24,
    },
    {
      nome: "Ana",
      idade: 42,
    },
  ],
  //MÉTODO
  calcularValorSeguro: function () {
    // .....
  },
};

//Acessando por notação ponto
carro.proprietario.endereco.numero = 1000
carro.proprietario.endereco.logradouro = 'Av Gigante'
console.log(carro)

//Deletanto objetos e atributos
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) // como condutores foi excluido, retorna undefined (undefined em JS é )

