function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (error) {
        // throw new Error('Aconteceu um erro: ' + error.message)
        // throw 10
        // throw true
        // throw 'mensagem'
        throw {
            nome: error.name,
            msg: error.message,
            date: new Date()
        }
    } finally {
        console.log('final');
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)