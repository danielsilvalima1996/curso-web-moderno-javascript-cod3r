function receberMelhorEstudante(array = []) {
    array.sort((a, b) => a > b ? 1 : -1)
    return array[array.length - 2]
}

console.log(receberMelhorEstudante([12, 16, 1, 5]));
console.log(receberMelhorEstudante([8, 4, 6, 5]));