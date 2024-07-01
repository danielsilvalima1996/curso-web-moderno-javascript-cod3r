function aumentarSalario(plano, salario) {
    switch (plano) {
        case 'A':
            return salario * 1.10
        case 'B':
            return salario * 1.15
        case 'C':
            return salario * 1.20
        default:
            return 'Plano inválido'
    }
}

console.log(aumentarSalario('A', 1000));
console.log(aumentarSalario('B', 1000));
console.log(aumentarSalario('C', 1000));
console.log(aumentarSalario('Z', 1000));