const inverso = parametro => {
    if (typeof parametro == 'number') {
        return -parametro
    } else if (typeof parametro == 'boolean') {
        return !parametro
    } else {
        return `Booleanos ou Números esperados, mas o parâmetro é do tipo ${typeof parametro}`
    }
}

console.log(inverso(true));
console.log(inverso('6'));
console.log(inverso(-2000));
console.log(inverso('programação'));