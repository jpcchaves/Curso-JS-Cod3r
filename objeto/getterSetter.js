const sequencia = {
    _valor: 1, // Convenção: mostra que é uma variável privada!!!!
    get valor() { return this._valor++},
    set valor(valor) {
        if (valor > this._valor){
            this._valor = valor
        }  
    }
}
// Acessando
    // GET
console.log(sequencia.valor, sequencia.valor)
    // SET
sequencia.valor = 1000
    // GET
console.log(sequencia.valor, sequencia.valor)
    // SET
sequencia.valor = 900 // como é menor do que o anterior, ele ignora e não executa
    // GET
console.log(sequencia.valor, sequencia.valor)


