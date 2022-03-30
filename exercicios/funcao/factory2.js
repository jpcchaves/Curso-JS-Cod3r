//Factory Function

function criarProduto(nome, preco, desconto = 0.2){
    return {
        Nome: nome,
        Preço: preco - desconto,
        Desconto: desconto
    }
}
console.log(criarProduto('Garrafa', 20))
console.log(criarProduto('Notebook', 1249.99))
console.log(criarProduto('Celular', 2199.99))
console.log(criarProduto('Refrigerante', 5))
