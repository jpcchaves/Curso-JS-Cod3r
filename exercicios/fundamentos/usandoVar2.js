
//EXEMPLO COM VARIÁVEL DECLARADA COM VAR

var num = 1; // escopo global
{
    var num = 2;
    console.log(`dentro = ${num}`) // dentro do escopo
}
console.log(`fora = ${num}`);
//vai retornar o 2 porque uma sobrescreve a outra, o que pode gerar bugs, etc.

//Obs. FUJA DO ESCOPO GLOBAL!!!!!!! => EVITA ERRO!!