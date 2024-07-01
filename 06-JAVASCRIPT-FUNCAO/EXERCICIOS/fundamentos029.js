function calcularMedia(lista = []) {
    let dentro = 0
    let fora = 0
    for (const index in lista) {
        const numero = lista[index]
        if (numero >= 10 && numero <= 20) {
            dentro++
        } else {
            fora++
        }
    }
    return `Estão dentro do range ${dentro} e fora estão ${fora}`
}

console.log(calcularMedia([1, 2, 3, 4, 5, 10, 12, 13, 20, 21]));