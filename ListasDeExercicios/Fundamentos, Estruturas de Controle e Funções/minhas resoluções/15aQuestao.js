// Um homem decidiu ir à uma revenda comprar um carro.
// Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes.
// Utilizando uma estrutura switch, caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”.
// Caso seja especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui”.

compraCarro = modelo => {
    switch (modelo){
        case "hatch":
            return console.log(`Compra efetuada com sucesso!`)
        case "sedan": case "motocicletas": case "caminhonetes":
            return console.log(`Temos também Sedans, Motocicletas e Caminhonetes.`)
        default:
            return console.log(`Não trabalhamos com esse tipo de automóvel aqui.`)
    }
}
compraCarro("hatch")
compraCarro("sedan")
compraCarro("motocicletas")
compraCarro("caminhonetes")
compraCarro("bicicleta")
compraCarro("skate")
compraCarro("trator")
compraCarro("trem")
