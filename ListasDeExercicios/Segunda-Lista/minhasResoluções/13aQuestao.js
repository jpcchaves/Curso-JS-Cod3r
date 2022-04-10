// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro

let array1 = ["Javascript", 1, "3", "Web", 20];
let array2 = ["a", "c"];

filtrarNum = (arr) => {
    let resultado = []
    for(let item of arr){
        if(typeof item === "number"){
            resultado.push(item)
        }
    }
    return resultado
};
console.log(filtrarNum(array1));



// solução alternativa
function filtraComFilter (arr){
    return arr.filter(item => typeof item === "number")
}
console.log(filtraComFilter(array1))
