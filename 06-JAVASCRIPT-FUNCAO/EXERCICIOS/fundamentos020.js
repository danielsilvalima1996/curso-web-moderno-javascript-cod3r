const separarCedulas = valor => {
    const valorStr = valor
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0
    while (valor > 0) {
        if (valor >= 100) {
            nota100++
            valor -= 100
        } else if (valor >= 50) {
            nota50++
            valor -= 50
        } if (valor >= 10) {
            nota10++
            valor -= 10
        } else if (valor >= 5) {
            nota5++
            valor -= 5
        } else {
            nota1++
            valor -= 1
        }
    }
    console.log(`Valor: ${valorStr}: Nota(s) de R$ 100: ${nota100}, Nota(s) de R$ 50: ${nota50}, Nota(s) de R$ 10: ${nota10}, Nota(s) de R$ 5: ${nota5}, Nota(s) de R$ 1: ${nota1}`);
}

separarCedulas(18)
separarCedulas(0)
separarCedulas(1)
separarCedulas(279)