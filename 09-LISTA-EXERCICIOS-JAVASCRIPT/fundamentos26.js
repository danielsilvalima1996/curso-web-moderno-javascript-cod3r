function segundoMaior(palavra = '') {
    return palavra.replace(/[aeiouà-ú]/gi, '')
}

console.log(segundoMaior('Cod3r'));
console.log(segundoMaior('Fundamentos'));