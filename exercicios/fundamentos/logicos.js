//Contexto: você tem dois trabalhos durante a semana. 
//Se você conseguir concluir o trabalho 1 e o trabalho 2, você vai comprar uma TV de 52 polegadas e tomar sorvete.
//Se apenas o trabalho 1 for concluído
//Se nenhum dos dois não forem concluído, você não sai de casa.

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete; // operador unário
    
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // retornando um objeto (chave, valor)
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
