const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0];

//Extraindo as notas menores do que 7 do array

// Sem callback
let notasBaixas = [];
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// Com Callback
const notas2 = [7.7,6.5,5.2,8.9,3.6,7.1,9.0];

const notasBaixas2 = notas2.filter(nota => nota < 7) // retorna true ou false
console.log(notasBaixas2)

// Com Callback e função anônima numa constante

const notas3 = [7.7,6.5,5.2,8.9,3.6,7.1,9.0];

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas3.filter(notasMenorQue7);
console.log(notasBaixas3.sort())

