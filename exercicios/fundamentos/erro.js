
//Mecanismo de tratamento de erro

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroLancar(e)
    } finally{
        console.log("Final do erro. Sempre vai executar o finally")
    }
}

const obj = { nome: 'João'};
//Vai dar erro porque chamei "name" e declarei "nome"
imprimirNomeGritado(obj);


//Função que vai mandar a mensagem de erro que está dando
function tratarErroLancar(erro){
    // throw new Error('Mensagem do erro e tal')
    // throw 10
    // throw true
    // throw 'Mensagme de erro'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
