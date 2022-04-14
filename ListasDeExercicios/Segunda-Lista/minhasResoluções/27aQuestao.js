function segundoMaior(numeros) {
    // invertendo o array
  const numerosOrdenados = numeros.sort(
    (numeroA, numeroB) => numeroB - numeroA
  );
  const segundoMaior = numerosOrdenados[1];
  return segundoMaior;
}
console.log(segundoMaior([1,2,3,4,5,6]))
