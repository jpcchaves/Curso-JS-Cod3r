function contarCaractere(caractereBuscado, frase) {
  return [...frase].filter((caractere) => caractere === caractereBuscado)
    .length;
}

console.log(contarCaractere("r", "A sorte favorece os audazes"))
