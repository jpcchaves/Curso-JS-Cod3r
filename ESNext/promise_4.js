// Num aleatorio
const numBetween = (min, max, tempo) => {
  // Evitando que o min seja maior que o max
  if (min > max) {
    [max, min] = [min, max]; // destructuring
  }
  return new Promise((resolve) => {
    setTimeout(function () {
      const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
      resolve(aleatorio);
    }, tempo);
  });
};

// gerando 10 números aleatórios de uma vez
function geraVariosNum(){
    return Promise.all([
        numBetween(1, 60, 500),
        numBetween(1, 60, 1000),
        numBetween(1, 60, 1500),
        numBetween(1, 60, 2000),
        numBetween(1, 60, 2500),
        numBetween(1, 60, 3000),
        numBetween(1, 60, 3500),
        numBetween(1, 60, 4000),
        numBetween(1, 60, 4500),
        numBetween(1, 60, 5000),
    ])
}
geraVariosNum()
    .then(numeros => console.log(numeros))
