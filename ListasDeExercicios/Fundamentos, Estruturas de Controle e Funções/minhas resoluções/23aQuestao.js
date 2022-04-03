// Escreva um algoritmo que leia o código de um aluno e suas três notas.
// Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3.
// Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

aprovaReprova = (codigoAluno, nota1, nota2, nota3) => {
    let media = (nota1 * 4 + nota2 * 3 + nota3 * 3) / 10
    media = media.toFixed(2)
    console.log(`
    Código do Aluno: ${codigoAluno}
    1ª avaliação: ${nota1} (peso 4)
    2ª avaliação: ${nota2} (peso 3)
    3ª avaliação: ${nota3} (peso 3)
    Média: ${media}
    `)

    // Mensagem de Aprovado|Reprovado
    if (media < 5){
        return console.log(`
        [REPROVADO] Sua média foi menor do que o mínimo necessário para ser aprovado.
        `)
    } else {
        return console.log(`
        [APROVADO] Parabéns!! Você foi aprovado com média ${media}
        `)
    }

}
aprovaReprova(100, 10, 5, 2)
aprovaReprova(200, 5, 5, 5)
aprovaReprova(300, 3, 2, 1)
aprovaReprova(400, 0, 0, 0)
aprovaReprova(500, 10, 6, 8)
aprovaReprova(600, 9, 9.5, 2.3)
