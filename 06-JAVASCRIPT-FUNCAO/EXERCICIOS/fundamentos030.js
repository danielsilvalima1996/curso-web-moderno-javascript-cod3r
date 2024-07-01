function calcularMedia(lista = []) {
    lista.sort((a, b) => a > b ? 1 : -1)
    return `Valor minimo ${lista[0]} e valor máximo ${lista[lista.length - 1]}`
}

console.log(calcularMedia([10, 2555, 3, 4, -5, 10, 12, 13, 20, 21]));