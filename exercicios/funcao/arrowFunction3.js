//THIS no NODE
    //Nesse contexto, o this aponta para o objeto GLOBAL

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // agora retorna false porque o bind define que o THIS vai ser apontado para o parâmetro passado
comparaComThis(obj) // true

// Arrow Function

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false, não aponta para o global
comparaComThisArrow(module.exports) // true, porque o THIS na arrow function aponta para o módulo que ela foi inserida


// TESTE Arrow com bind()

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false, porque a arrow function é superior ao BIND()
comparaComThisArrow(module.exports) // true
