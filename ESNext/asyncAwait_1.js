
const esperarPor = (tempo = 2000) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando promise....')
            resolve('Vishhh')
        }, tempo);
    })
}

// Por trás de uma async await é preciso ter uma promise 
async function executar(){
    await esperarPor(1500)
    console.log('Async/Await1')

    await esperarPor(1500)
    console.log('Async/Await2')

    await esperarPor(1500)
    console.log('Async/Await3')
}
executar()
