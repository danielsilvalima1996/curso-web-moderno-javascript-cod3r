const multiplicarVetor = (vetorInt = [], multiplicador = 0) => {
    const resultado = vetorInt.map(map => map * multiplicador)
    return resultado
}
const multiplicadorSeMaiorQue5 = (vetorInt = [], multiplicador = 0) => {
    const resultado = vetorInt.map(map => map * (multiplicador > 5 ? multiplicador : 1))
    return resultado
}

console.log(multiplicarVetor([1, 2, 3, 4, 5], 2));
console.log(multiplicadorSeMaiorQue5([1, 2, 3, 4, 5], 10));