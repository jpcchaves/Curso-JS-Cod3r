function soBoaNoticia(nota){
    if(nota >= 7){
        //true
        console.log(`Aprovado com nota ${nota}`)
    }
}

soBoaNoticia(8.1)

seForVerdadeEuFalo = (valor) => {
    if(valor){
        console.log(`É verdade: ${valor}`)
    }
}

//FALSE

seForVerdadeEuFalo() // Undefined = false
seForVerdadeEuFalo(null) // null = false
seForVerdadeEuFalo(undefined) // undefined = false
seForVerdadeEuFalo(NaN) // NaN = false
seForVerdadeEuFalo('') // string vazia = false
seForVerdadeEuFalo(0) // número 0 = false. Obs. é o único número que retorna false

//TRUE

seForVerdadeEuFalo(-1) // número -1 = true
seForVerdadeEuFalo(' ') // string com um espaço em branco = true
seForVerdadeEuFalo('?') // interrogação = true
seForVerdadeEuFalo([]) // array vazio = true
seForVerdadeEuFalo([1]) // array com elementos = true
seForVerdadeEuFalo({}) // objeto vazio = true
