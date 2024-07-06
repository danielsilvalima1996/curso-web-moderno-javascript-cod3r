const receberPrimeiroEUltimoElemento = (array = []) => {
    if (array.length > 1) {
        return array.slice(0, 1).concat(array.slice(array.length - 1))
    }
}

console.log(receberPrimeiroEUltimoElemento([7, 14, 'olá']));
console.log(receberPrimeiroEUltimoElemento([-100, 'aplicativo', 16]));