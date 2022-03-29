// Estratégia 1 para gerar valor padrão (obsoleta)
    function soma1(a,b,c){
        //a = a ou a = 1
        //valor padrão
        a = a || 1 // se não for passado nenhum valor, "a" vai ser undefined, que é false.
        b = b || 1
        c = c || 1
        return a+b+c
    }
    console.log(soma1(), soma1(3), soma1(1,2,3), 
    soma1(0,0,0)) // 0 -> retorna 
    
//Estratégia 2, 3 e 4 para gerar valor padrão
    function soma2(a,b,c){
        //estratégia 2
        a = a !== undefined ? a : 1; //se "a" for diferente de undefined, retorna o próprio "a". se "a" for indefinido, "a" recebe 1

        //estratégia 3
        b = 1 in arguments ? b : 1; // dentro de arguments existe o índice 1, se existir, pegue o valor de b. Se não, b recebe 1

        //estratégia 4 !!! MAIS RECOMENDADA !!!
        c = isNaN(c) ? 1 : c // "c" é NaN? se sim, retorna 1. Se não, retorna o próprio "c"

        return a+b+c
    }
    console.log(soma2(), soma2(2),soma2(1,2,3),soma2(0,0,0))

    //VALOR PADRÃO DO ES2015
    console.log("===== PADRÃO ES2015 =====")
    function soma3 (a = 1, b = 1, c = 1){
        return a + b + c
    }
    console.log(soma3(3), soma3(), soma3(1,2,3), soma3(0,0,0))





