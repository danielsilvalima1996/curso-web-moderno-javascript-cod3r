const converterIdadeParaDias = idade => {
    const UM_ANO = 365
    return UM_ANO * idade
}

console.log(converterIdadeParaDias(25));
console.log(converterIdadeParaDias(70));