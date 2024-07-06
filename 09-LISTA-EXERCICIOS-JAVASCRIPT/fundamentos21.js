const menorNumero = (array = []) => {
    array.sort((a, b) => a > b ? 1 : -1)
    return array[0]
}

const array1 = [10, 5, 35, 65]
console.log(menorNumero(array1));

const array2 = [5, -15, 50, 3]
console.log(menorNumero(array2));