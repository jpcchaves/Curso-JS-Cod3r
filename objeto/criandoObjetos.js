// Estratégias de criação de objetos

// 1. Notação literal
    const obj1 = {} // literal {}
    console.log(obj1)

// 2. Object
    console.log(typeof Object, typeof new Object) // instanciando um objeto a partir da function Object
    const obj2 = new Object
    console.log(obj2)
    
// Funções Construtoras
    function Produto(nome, preco, desconto){
        this.nome = nome // ele fica visível para fora do objeto atributo público
        // Método público - visível
        this.getPrecoComDesconto = () => {
            return preco * (1 - desconto)
        }
    }

    // Instanciando
    const p1 = new Produto('Caneta', 7.99, 0.15)
    const p2 = new Produto('Notebook', 2998.99, 0.25)
    console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


// Função Factory (padrão de projeto)
    function criarFuncionario(nome, salarioBase, faltas){
        // Retorna um objeto
        return {
            nome,
            salarioBase,
            faltas,
            getSalario(){
                return (salarioBase / 30) * (30 - faltas)
            }
        }
    }

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 10000, 1)
console.log(f1.getSalario(), f2.getSalario().toFixed(2))

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto....
const fromJSON = JSON.parse('{"info" : "Sou um JSON"}')
console.log(fromJSON.info)
