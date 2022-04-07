// JSON  -> arquivo de texto

// Convertendo objeto em JSON
const obj = {a:1, b:2, c:3, soma() { return a+b+c}}
console.log(JSON.stringify(obj))

// Convertendo o JSON em objeto
// os atributos e textos colocados dentro do JSON obrigatoriamente precisam estar entre aspas duplas!!!!
console.log(JSON.parse('{"a":1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))
