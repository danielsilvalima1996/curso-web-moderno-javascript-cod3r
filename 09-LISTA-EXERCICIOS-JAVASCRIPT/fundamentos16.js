function checarAnoBissexto(ano) {
    const regra = ano % 4 == 0 && ano && ano % 100 != 0 && ano % 400 != 0
    return regra
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))