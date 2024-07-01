function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        case '+':
            return num1 + num2
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(6, 3, '+'));
console.log(calculadora(6, 3, '-'));
console.log(calculadora(6, 3, '*'));
console.log(calculadora(6, 3, '/'));
console.log(calculadora(6, 3, '%'));