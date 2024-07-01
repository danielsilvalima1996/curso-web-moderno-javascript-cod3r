function progressaoAritmetica(numerosDeTermos, primeiroTermo, razao) {
    const termos = []
    termos.push(primeiroTermo)
    for (let index = 1; index < numerosDeTermos; index++) {
        termos.push(termos[index-1] + razao);
    }
    console.log(termos);
    console.log(`soma: ${termos.reduce((previous, current) => previous + current, 0)}`);
}

function progressaoGeometrica(numerosDeTermos, primeiroTermo, razao) {
    const termos = []
    termos.push(primeiroTermo)
    for (let index = 1; index < numerosDeTermos; index++) {
        termos.push(termos[index-1] * razao);
    }
    console.log(termos.join(', '));
    console.log(`soma: ${termos.reduce((previous, current) => previous + current, 0)}`);

}

progressaoAritmetica(10, 2, 2);
// progressaoAritmetica(10, 3, 2);
// progressaoAritmetica(6, 15, -5);
// progressaoAritmetica(5, 5, 0);
// progressaoGeometrica(8, 2, 2);
// progressaoGeometrica(5, -1, 3);
// progressaoGeometrica(8, 3, -2);
progressaoGeometrica(5, 10, 1);