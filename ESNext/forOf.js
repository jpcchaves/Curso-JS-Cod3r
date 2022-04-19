// O FOR OF percorre os valores dos indices

for (let letra of "Cod3r") {
  console.log(letra);
}

const assuntosEcma = ["map", "set", "promise"];

// O for IN percorre nos indices
for (let i in assuntosEcma) {
  console.log(i);
}

for (let assunto of assuntosEcma) {
  console.log(assunto); // retorna os valores dos indices
}

const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);

for (let assunto of assuntosMap) {
  console.log(assunto);
}

// pegando as chaves
for (let chave of assuntosMap.keys()) {
  console.log(chave);
}

// pegando os valores
for (let valor of assuntosMap.values()) {
  console.log(valor);
}
// desestruturando para pegar chave e valor
for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl);
}

// pegando as letras de um array passado no construtor Map 
const s = new Set(["a", "b", "c"]);
for (let letra of s) {
  console.log(letra);
}
