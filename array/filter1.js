// Usando o método filter

const produtos = [
    {nome: "Notebook", preco: "2499", fragil: true},
    {nome: "IpadPro", preco: "4199", fragil: true},
    {nome: "Copo de Vidro", preco: "12.49", fragil: true},
    {nome: "Copo de Plástico", preco: "5.25", fragil: false}
]

// p -> cada um dos produtos
produtos.filter(function(p){
    // filtragem:
    return p.preco > 2500
})


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
