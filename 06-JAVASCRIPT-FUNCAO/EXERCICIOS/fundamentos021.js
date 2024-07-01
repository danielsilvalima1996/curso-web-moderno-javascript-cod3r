function calcularValorConveio(idade) {
    const valorInicial = 100
    let valorAdicional = 0
    if(idade < 10) {
        valorAdicional = 80
    } else if (idade <= 30) {
        valorAdicional = 50
    } else if (idade <= 60) {
        valorAdicional = 95
    } else {
        valorAdicional = 130
    }
    return valorInicial + valorAdicional
}

console.log(calcularValorConveio(8));
console.log(calcularValorConveio(25));
console.log(calcularValorConveio(51));
console.log(calcularValorConveio(78));