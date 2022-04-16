const schedule = require('node-schedule')

const tarefas1 = schedule.scheduleJob('*/5 * 15 * * 6', function(){
    console.log('Executando a tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefas1.cancel()
    console.log(`Cancelando a tarefa 1!`)
}, 20500)

// Regra de recorrência
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 6)]
regra.hour = 15
regra.second = 30

const tarefas2 = schedule.scheduleJob(regra, function(){
    console.log('Executando a tarefa 2!', new Date().getSeconds())
})
