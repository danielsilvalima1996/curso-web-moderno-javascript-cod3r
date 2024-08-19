// callback alinhadas
// setTimeout(() => {
//     console.log('Executando callback...')
//     setTimeout(() => {
//         console.log('Executando callback...')
//         setTimeout(() => {
//             console.log('Executando callback...')
//         }, 2000);
//     }, 2000);s
// }, 2000);

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log('Executando promise...');
            resolve('Vishhhh')
        }, tempo);
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(() => esperarPor())