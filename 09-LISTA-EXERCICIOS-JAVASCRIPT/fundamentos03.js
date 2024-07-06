const calcularSalario = (horasTrabalhadas, valorHora) => {
    return `Salário igual a ${(
        horasTrabalhadas * valorHora)
        .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
}

console.log(calcularSalario(150, 40.5));