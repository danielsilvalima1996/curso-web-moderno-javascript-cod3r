function imparOuPar(lista = []) {
    let pares = 0
    let impares = 0
    lista.forEach(numero => {
        numero % 2 == 0 ? pares++ : impares++
    })
    return `Total de números impares: ${impares} e pares: ${pares}`
}

console.log(imparOuPar([2, 4, 6, 8, 1, 3, 5]));