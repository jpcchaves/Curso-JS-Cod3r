//VAR

{
  {
    {
      {
          var sera = 'Será????'
      }
    }
  }
}
console.log(sera)

//A variável declarada com VAR é visível fora do bloco

teste = () =>{
    var local = 'Variável Local';
    console.log(local)
}

teste();

console.log(local); // vai dar erro porque não é possível acessar uma variável declarada com VAR que foi declarada dentro do escopo de uma função


/* ====== */