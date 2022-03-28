//Pushing a function into an array
//Error using VAR

const funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2](); // sempre vai retornar 10