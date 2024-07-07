const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map((element) => element * 20)

console.log(resultado);

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = (e = 0) => e.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' })

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado);