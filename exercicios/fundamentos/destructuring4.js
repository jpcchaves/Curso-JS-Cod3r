//destructuring with Function using ARRAY
function rand([min = 0, max = 1000]){
    if (min > max){
        [min, max] = [max, min]; // se o min > max, inverte os valores
    }
    const valor = Math.random() * (max - min) + min;
    return Math.round(valor);
}

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([, 10]));
console.log(rand([]));
// console.log(rand()); **dá erro**