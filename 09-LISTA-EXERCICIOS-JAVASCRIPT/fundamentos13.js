const filtrarNumeros = (array = []) => {
    const numeros = array.filter(item => typeof item == 'number')
    return numeros
}

console.log(filtrarNumeros(['Javascript', 1, '3', 'web', 20]));
console.log(filtrarNumeros(['a', 'c']));