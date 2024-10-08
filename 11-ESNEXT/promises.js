function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('!?!?'))
    .then(novaFrase => console.log(novaFrase))
    .catch(error => console.log(error))