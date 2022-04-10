// Array to object
const array1 = [
  ["Título", "Trem das Cores"],
  ["Artista", "Caetano Veloso"],
  ["Album", "Coletânea"],
  ["Duração", 150],
];

const obj1 = {
  Título: "Trem das Cores",
  Artista: "Caetano Veloso",
  Album: "Coletânea",
  Duração: 150,
};

// Iterando com for of
function arrayToObject(array) {
  let result = {};
  for (const element of array) {
    result[element[0]] = element[1];
  }
  return result;
}
console.log(arrayToObject(array1));

// =======================

function objectToArray(object) {
    let result = []
    for(key of Object.keys(object)){
        result.push(
            [key, object[key]]
        )
    }
    return result
}
console.log(objectToArray(obj1))
