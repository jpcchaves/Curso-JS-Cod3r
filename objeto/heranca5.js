console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
// split -> converte a string em array
// reverse -> inverte a ordem do array
// join -> converte o array em string
// Podemos acessar as funções que colocamos dentro do prototype de alguma função
console.log('Escola Cod3r'.reverse()) 

Array.prototype.first = function () {
    return this[0]
}
console.log([1,2,3,4,5.].first())
console.log(['a','b','c','d'].first())
