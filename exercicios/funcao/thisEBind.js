const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao) // this = acessa um atributo de um objeto
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() //Conflito entre padarigmas: funcional e O.O.

//Solução:
    //Usamos o bind para passar o objeto que queremos que seja resolvido com o THIS
const falarDePessoa = pessoa.falar.bind(pessoa) // sempre o THIS será resolvido para o objeto pessoa
    falarDePessoa()
