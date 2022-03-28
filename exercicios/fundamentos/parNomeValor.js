// par nome/valor

const saudacao = 'Opa!' // contexto léxico 1

//Léxico => é o contexto (o local) o qual a variável foi definida fisicamente no código


//a constante abaixo é a mesma da declarada acima, porém, não apresenta erro porque estão em contextos diferentes.
function exec(){
    const saudacao = 'Oiiiiiiii!' // contexto léxico 2
    return saudacao
}

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Dois',
        numero: 234,
        referencia: 'Ao lado da Rua Um'
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente)