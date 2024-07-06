const simboloMais = quantidade => {
    if(quantidade > 0) {
        return '+'.repeat(quantidade)
    }
}

console.log(simboloMais(2))
console.log(simboloMais(4))