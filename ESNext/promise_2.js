// Exemplo de callback
setTimeout(function () {
  console.log("Executando callback...");

  setTimeout(() => {
    console.log("Executando a segunda callback...");

    setTimeout(() => {
      console.log("Executando a terceira callback...");
    }, 2000);
  }, 2000);
}, 2000);


const esperarPor = (tempo = 2000) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando promise....')
            resolve('Vishhh')
        }, tempo);
    })
}
esperarPor()
    .then(() => esperarPor(3000))
    .then(esperarPor) // assume o valor padrão
