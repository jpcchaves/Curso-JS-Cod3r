/* === OBSERVAÇÕES GERAIS === */
//Função em JS é First-Class Object
//Higher-order function

/* Tipos de Funções */

    // Função de forma literal
    function fun1(/*parâmetros*/){
        // toda função retorna o valor undefined se não for retornado nada
        // bloco de códigos
    }
    fun1(/*argumentos*/)

    // Armazenada em uma variável (função anônima)
    const fun2 = function(){
        // pode chamar a função pelo nome da variável com os parênteses
        // bloco
    }  
    fun2()

    // Armazenada em um array
    const array = [function (a,b) {return a + b}, fun1, fun2] //podemos armazenar funções já declaradas dentro de um array

        //Executando a função no array e passando argumentos
                console.log(array[0](2,3))

    // Armazenada em um objeto
    const obj = {}
    obj.falar = function () {return 'Opa'}
    console.log(obj.falar())

    // Passar uma função como parâmetro
    function run(fun){
        fun()
    }
    run(function(){ console.log('Opa, acabei de passar uma função como parâmetro **')})

    // Funções podem retornar/conter uma função
    function soma(a,b){
        return function (c){
            console.log(a + b + c)
        } 
    }
    soma(2,3)(4) // passando parâmetro para uma função dentro de uma função
    const cincoMais = soma(2,3)
    cincoMais(4)
