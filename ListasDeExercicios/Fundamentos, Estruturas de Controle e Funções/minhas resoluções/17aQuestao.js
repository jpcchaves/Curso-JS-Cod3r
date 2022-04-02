//Um funcionário irá receber um aumento de acordo com o seu plano de trabalho de acordo com a tabela abaixo
    // PLANO || AUMENTO
    //  A    || 10%
    //  B    || 15%
    //  C    || 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário.
// Use a estrutura switch e faça um caso default que indique que o plano é inválido

calculaSalario = (salario, plano) =>{
    switch (plano){
        case "A":
            return console.log(`Seu salário atual será: R$`, salario + (salario * 0.1)) // 10%
        case "B":
            return console.log(`Seu salário atual será: R$`, salario + (salario * 0.15)) // 15%
        case "C":
            return console.log(`Seu salário atual será: R$`, salario + (salario * 0.2)) //20%
        default:
            return console.log(`Plano Inválido.`)
    }
}
calculaSalario(1000, "A")
calculaSalario(1000, "B")
calculaSalario(1000, "C")
calculaSalario(1000, "D")
calculaSalario(1000, "E")
calculaSalario(1000, "F")

