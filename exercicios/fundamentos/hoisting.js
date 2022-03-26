console.log('a = ', a); // undefined porque foi declarada depois da chamada
var a = 2;
console.log('a = ', a); // mostra o valor de a

//hoisting é o içamento da variável. o JS eleva a variável para o topo como se já tivesse sido declarada, porém, retorna undefined porque, apesar de ter sido declarada, não foi atribuido nenhum valor.