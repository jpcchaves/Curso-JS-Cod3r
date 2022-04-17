// Operador ...rest (juntar)
// Operador ...spread (espalhar)

// Usar spread com um objeto
const funcionario = {nome: "João", salario: 1508.00}
const clone = {ativo: true, ...funcionario} // copiando todos os atributos de funcionario no clone
console.log(funcionario)
console.log(clone)

// Usar spread com um array
const grupoA = ['Joao', 'Paulo', 'Chaves']
const grupoB = ['Joao', 'Paulo', 'Chaves', ...grupoA]
console.log(grupoA)
console.log(grupoB)
