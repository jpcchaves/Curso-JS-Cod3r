//Tipos de Declarações de Funções
    console.log(soma(3,4))

    //Function Declaration
        //quando é declarada dessa forma, o leitor do JS eleva ela ao topo e depois executa o resto. Por isso se chamarmos o console.log antes da declaração da função, não teremos erro.
    function soma(x,y){
        return x + y
    }

    //Function Expression
    const sub = function (x,y){
        return x - y
    }

    //Named function expression (declaration + expression)
    const mult = function mult(x,y){
        return x * y
    }
    