const nums = [1,2,3,4,5,6,7,8,9];

// Break - cria uma quebra de laço que pula pra fora do laço

for (let i in nums){
    if (i == 5) {
    break
    }
    console.log(`i = ${nums[i]}`)
}

// Continue - interrompe a repetição corrente e vai pra próxima dentro do laço

for (let i2 in nums){
    if (i2 == 5){
        continue // quando i2 == 5, ele pula o valor e continua a aplicação
    }
    console.log(`${i2} = ${nums[i2]}`)
}

//

externo: for (let a in nums) {
    for (let b in nums){
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
