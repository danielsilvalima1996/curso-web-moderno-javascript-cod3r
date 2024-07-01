const jurosCompostos = (capitalInicial, taxaDeJuros, tempoDeAplicação) => formatarNumero(capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicação)

const formatarNumero = (numero = 0) => numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })


const calcularAnuidade = (mes, valor) => {
    if(mes > 0 && mes < 13) {
        return jurosCompostos(valor, 0.05, mes - 1)
    }
}

console.log(calcularAnuidade(1, 100));
console.log(calcularAnuidade(2, 100));
console.log(calcularAnuidade(3, 100));
console.log(calcularAnuidade(4, 100));
console.log(calcularAnuidade(5, 100));
console.log(calcularAnuidade(6, 100));
console.log(calcularAnuidade(7, 100));