function formatarMoeda(valor = 0) {
    const valorDuasCasas = valor.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})
    return `R$ ${valorDuasCasas}`
}

console.log(formatarMoeda(0.1 + 0.2))
console.log(formatarMoeda(3333.925))