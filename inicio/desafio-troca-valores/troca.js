let a = 7;
let b = 94;

console.log(a, b)

let holder = a;
a = b;
b = holder;

console.log(a, b);