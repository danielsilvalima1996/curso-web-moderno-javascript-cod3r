// const fatorial = numero => {
//     if(numero < 0) {
//         console.log('Não é possível calcular fatorial de número negativo');
//     } else if(numero == 0 || numero == 1) {
//         console.log(`Fatorial de !${numero} = 1`);
//     } else {
//         let fatorial;
//         for (let i = numero; i > 0 ; i--) {
//             if(fatorial) {
//                 fatorial *= i
//             } else {
//                 fatorial = i
//             }
//         }
//         console.log(`Fatorial de !${numero} = ${fatorial}`);
//     }
// }

const fatorial = numero => {
    if (numero == 0) {
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

// fatorial(-1)
// fatorial(0)
// fatorial(1)
// fatorial(2)
// fatorial(3)
// fatorial(4)
// fatorial(5)
// fatorial(6)
// fatorial(7)
console.log(fatorial(10));