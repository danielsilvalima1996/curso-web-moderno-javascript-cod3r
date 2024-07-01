function anoBissexto(ano) {
    const regra = ano % 4 == 0 && ano && ano % 100 != 0 && ano % 400 != 0
    if (regra) {
        console.log(`O ano ${ano} ${!regra ? 'não' : ''} é bissexto`);
    }
    return regra
}

console.log(anoBissexto(1988))
console.log(anoBissexto(1992))
console.log(anoBissexto(1996))
console.log(anoBissexto(1700))
console.log(anoBissexto(1800))
console.log(anoBissexto(1900))
console.log(anoBissexto(2100))
console.log(anoBissexto(2200))
console.log(anoBissexto(2300))
console.log(anoBissexto(2500))
console.log(anoBissexto(2600))