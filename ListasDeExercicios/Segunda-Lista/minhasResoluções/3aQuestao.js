function calcularSalario (horasT, salarioH){
    const salarioMes = horasT * salarioH
    return `Salário igual a R$ ${salarioMes.toFixed(2).replace('.', ',')}`
}
console.log(calcularSalario(150, 40.5))
