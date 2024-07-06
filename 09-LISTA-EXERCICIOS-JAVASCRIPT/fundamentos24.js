function segundoMaior(letra, palavra = '') {
    let total = 0
    const arrayCaracteres = palavra.split('')
    for (let i = 0; i < arrayCaracteres.length; i++) {
        if(letra == arrayCaracteres[i]) {
            total++
        }
    }
    return total
}

console.log(segundoMaior('r', 'A sorte favorece os audazes'));
console.log(segundoMaior('c', 'Conhece-te a ti mesmo'));