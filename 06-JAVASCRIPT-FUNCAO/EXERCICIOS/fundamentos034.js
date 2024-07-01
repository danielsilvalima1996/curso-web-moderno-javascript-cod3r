function verificarCaracteres(string1, string2 = '') {
    const vetorStr1 = string1.split('')
    for (const key in vetorStr1) {
        if(!string2.includes(vetorStr1[key])) {
            return false
        }
    }
    return true
}

console.log(verificarCaracteres('daniel', 'leinad'));
console.log(verificarCaracteres('daniel', 'nielda'));
console.log(verificarCaracteres('daniel', 'danilo'));
console.log(verificarCaracteres('daniel', 'dadadaniel'));