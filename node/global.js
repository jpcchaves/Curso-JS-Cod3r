// Global
// Qualquer outro arquivo do sistema terá acesso ao novo atributo criado

console.log(global)
// Adicionado o Object.freeze para evitar que o objeto seja alterado (boa prática)
global.minhaApp = Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})