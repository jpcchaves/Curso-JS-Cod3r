function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function numDaSorte(num) {
  let numSorteado1 = getRandomInt(1, 10);
    if (num === numSorteado1){
        return `Parabéns!! O número sorteado foi o ${numSorteado1}`
    } else {
        return `Que pena! O número sorteado foi o ${numSorteado1}`
    }
}
console.log(numDaSorte(1));
console.log(numDaSorte(2));
console.log(numDaSorte(4));
console.log(numDaSorte(5));
