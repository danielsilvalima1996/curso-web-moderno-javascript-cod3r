const calcularMedia = (array = []) => {
    const soma = array.reduce((previous, current) => previous + current, 0)
    const media = soma / array.length
    return media
}

const array1 = [0, 10]
console.log(calcularMedia(array1));

const array2 = [1, 2, 3, 4, 5]
console.log(calcularMedia(array2));