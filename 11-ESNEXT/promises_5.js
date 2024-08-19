function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            consol.leg('Foi')
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch (error) {
            reject(error)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(valor => `Valor: ${valor}`)
    .then(
        console.log
        // ,
        // err => console.log(`Erro Esp.: ${err}`))
    )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))