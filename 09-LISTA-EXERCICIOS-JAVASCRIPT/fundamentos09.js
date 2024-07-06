const repetir = (elemento, vezes) => {
    const vetorRetorno = []
    for (let i = 0; i < vezes; i++) {
        vetorRetorno.push(elemento)
    }
    return vetorRetorno
}

console.log(repetir('Código', 2));
console.log(repetir(7, 3));