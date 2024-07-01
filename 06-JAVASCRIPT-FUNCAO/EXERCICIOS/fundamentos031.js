function calcularMedia(lista = []) {
    const negativos = lista.filter(numero => numero < 0).length
    return `Total de números negativos ${negativos}`
}

console.log(calcularMedia([10, 2555, -3, 4, -5, 10, 12, 13, 20, 21]));