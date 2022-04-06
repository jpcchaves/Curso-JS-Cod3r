// Melhorias para notação literal

const a = 1
const b = 2
const c = 3

// Se o valor do atributo for o mesmo do valor declarado na constante, podemos reduzir o código:
const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj1, obj2)

// Criando um atributo dinamicamente usando uma String
const nomeAtributo = "Nota"
const valorAtributo = 7.87

const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3)

const obj4 = {[nomeAtributo]: valorAtributo }
console.log(obj4)

// Definindo funções dentro de um Obj

const obj5 = {
    // Forma antiga:
    funcao1: function () {
        // .....
    },
    // Forma nova:
    funcao2 () {
        //...
    }
}
