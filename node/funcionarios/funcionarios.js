const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Axios é um client http, ele faz requisições para obter informações de algo que está remoto

// ====== DESAFIO =======
    // Encontrar a MULHER CHINESA com o menor SALARIO

// Cria uma função que filtra o PAÍS
    const chineses = f => f.pais === "China" 

// Cria uma função que filtra se é MULHERES
    const mulheres = f => f.genero === "F"

// Cria uma função reduce que encontra o menor salário
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    // Mulher chinesa com o menor salário
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)   
})
