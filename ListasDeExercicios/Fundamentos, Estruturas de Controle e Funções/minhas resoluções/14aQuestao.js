// Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos:
    // Caso maçã, retorne no console: “Não vendemos esta fruta aqui”.
    // Caso kiwi, retorne: “Estamos com escassez de kiwis”.
    // Caso melancia, retorne: “Aqui está, são 3 reais o quilo”.
    // Teste com estas três opções.
    // Crie também um default, que retornará uma mensagem de erro no console.

analisaFruta = fruta => {
    switch (fruta){
        case "maca": case "maçã": case "Maçã":
            return console.log(`Não vendemos ${fruta} aqui.`)
        case "kiwi":
            return console.log(`Estamos com escassez de ${fruta}`)
        case "melancia":
            return console.log(`Aqui está sua ${fruta}, é R$ 3,00 o KG.`)
        default:
            return console.log(`[ERRO] Fruta inválida`)
    }
}
analisaFruta("maca")
analisaFruta("kiwi")
analisaFruta("melancia")
analisaFruta(12)
analisaFruta("Batata")
analisaFruta("2321321")
analisaFruta("maçã")
analisaFruta("Maçã")
analisaFruta("Pera")
