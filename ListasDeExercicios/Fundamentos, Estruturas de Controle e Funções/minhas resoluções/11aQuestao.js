// As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto;
// De 100 em 100 anos não é ano bissexto;
// De 400 em 400 anos é ano bissexto;
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a mensagem e retornando true ou false

anoBissexto = ano => {
    if (ano % 400 == 0){
        return console.log(`Divisível por 400 ${true}`)
    } else if (ano % 100 == 0){
        return console.log(`Multiplo de 100. false`)
    } else if (ano % 4 == 0){
        return console.log(`Divisível por 4, é bissexto`)
    } else {
        return console.log("Não é bissexto")
    }
}
anoBissexto(2400)
anoBissexto(2600)
anoBissexto(2024)
anoBissexto(2022)
anoBissexto(1977)
