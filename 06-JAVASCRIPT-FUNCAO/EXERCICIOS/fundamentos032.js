function calcularMedia(lista = []) {
    let total = 0
    for (const i in lista) {
        total += lista[i]
    }
    return `Media ${total / lista.length}`
}

console.log(calcularMedia([13, 20, 21]));