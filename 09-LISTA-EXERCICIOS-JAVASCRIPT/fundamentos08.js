const multiplicar = (num1, num2) => {
    if (num1 >= 0 && num2 >= 0) {
        let valor = num1
        for (let i = 1; i < num2; i++) {
            if (valor > 0) {
                valor += num1
            } else {
                return 0
            }
        }
        return valor
    } else {
        return "Error"
    }
}

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));
console.log(multiplicar(1, 8));
console.log(multiplicar(100, 50));