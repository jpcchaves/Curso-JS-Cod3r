// // Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
// classificação: 
    // Todo aluno recebe uma nota de 0 a 100. 
    // Alunos com nota abaixo de 40 são reprovados. 
// As notas possuem a seguinte regra de arredondamento:
// Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5.
// Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.

aprovaReprova = nota => {
    let notaInicial = nota;
    if (nota < 0 || nota > 100){
        return console.log(`[ERRO] Nota inválida!`)
    }
    if (nota < 40) {
        return console.log(`Sua nota foi abaixo da média. REPROVADO!!!`)
    }
    if (nota % 5 != 0){
        do{
            nota++
        } while (nota % 5 != 0)
    }
    if ((nota > notaInicial) && (nota - notaInicial) <= 3) {
        return console.log(`Sua nota foi arredondada de ${notaInicial} para ${nota}`)
    }
    if ((nota < notaInicial) && (notaInicial - nota) <= 3){
        return console.log(`Sua nota foi arredondada de ${notaInicial} para ${nota}`)
    }
    else {
        return console.log(`Sua nota não foi arredondada, NOTA = ${notaInicial}`)
    }
}

aprovaReprova(39);
aprovaReprova(41);
aprovaReprova(42);
aprovaReprova(46);
aprovaReprova(47);
