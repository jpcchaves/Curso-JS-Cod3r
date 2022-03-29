function Pessoa(){
    this.idade = 0;

    const self = this // aponta para o objeto new Pessoa
    setInterval(function () {
        self.idade++
        //this.idade++ (usa com o bind)
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}
new Pessoa
