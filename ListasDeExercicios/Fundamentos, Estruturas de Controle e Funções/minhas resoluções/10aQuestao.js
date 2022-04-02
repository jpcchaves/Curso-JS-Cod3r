// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false

verificaNumero = num => {
    if (num % 3 == 0){
        return true
    } else {
        return false
    }
}
console.log(verificaNumero(213))
console.log(verificaNumero(3))
console.log(verificaNumero(6))
console.log(verificaNumero(12))
console.log(verificaNumero(30))
console.log(verificaNumero(57))
