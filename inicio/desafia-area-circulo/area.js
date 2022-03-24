// ÁREA DA CIRCUNFERÊNCIA
// Formula: pi * r^2;

const PI = 3.14159265359;
let raio = 10;

const area = function (pi, raio){
    return pi * raio**2;
}   
console.log(`A área é ${area(PI, raio)} m2.`);
