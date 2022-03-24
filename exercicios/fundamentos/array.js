const valores = [7.2,7.3,7.4,7.5,7.6];
console.log(valores)
console.log(valores[0], valores[0]);
console.log(valores[0])
console.log(valores.length)
valores[5] = 2321312312321;
console.log(valores)


//inserindo valores no array PUSH
valores.push({id: 3}, false, null, 'elemento que vai ser removido');
console.log(valores)

//removendo valores do array POP
console.log(valores.pop());

//array é do tipo OBJETO
console.log(typeof valores)