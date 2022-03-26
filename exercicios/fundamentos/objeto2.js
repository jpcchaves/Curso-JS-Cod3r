

//criando uma instancia a partir de uma function
console.log(typeof Object);
console.log(typeof new Object()); // instanciando uma função
//um objeto criado a partir de uma função


//criando uma instancia a partir de uma function
const cliente = function() {};
console.log(typeof cliente); // function
console.log(typeof new cliente()); // object


//class é uma função que exerce o papel de uma classe
//criando instancia a partir de uma classe
class Produto {};
console.log(typeof Produto); // função 
console.log(typeof new Produto()) // object