const receberSomenteOsParesDeIndicesPares = (array = []) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 && i % 2 == 0) {
            newArray.push(array[i])
        }
    }
    return newArray
}

const array1 = [1, 2, 3, 4]
console.log(receberSomenteOsParesDeIndicesPares(array1));

const array2 = [10, 70, 22, 43]
console.log(receberSomenteOsParesDeIndicesPares(array2));