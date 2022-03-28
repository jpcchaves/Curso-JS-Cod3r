//Estrutura FOR


    //While para comparar com o FOR
let contador = 1;

while (contador <= 10){
    console.log(`Contador = ${contador}`)
    contador++
}

//FOR

for (let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 7.7, 7.3, 6.8];
for (let i = 0; i < notas.length; i++){
    console.log(`i = ${i}. Nota =`, notas[i]);
}


