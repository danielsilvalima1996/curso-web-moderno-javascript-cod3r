const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', () => {
    console.log(`Executando tarefa 1! ${new Date().getSeconds()}`)
})

setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelando tarefa1!');
}, 20000);

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = new schedule.Range(0, 7) // somente sábados
regra.hour = 2
regra.second = 10

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log(`Executando tarefa 2! ${new Date().getSeconds()}`)
})