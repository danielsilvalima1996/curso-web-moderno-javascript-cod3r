function segundoMaior(array = [], digitos = 0) {
    const filtrados = array.map(item => item.toString())
        .filter(fil => fil.length == digitos);
    return filtrados
}

console.log(segundoMaior([38, 2, 365, 10, 125, 11], 2));
console.log(segundoMaior([5, 9, 1, 125, 11], 1));