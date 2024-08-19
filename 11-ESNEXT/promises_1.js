
let a = 1
console.log(a);

// alias para a callback
let p = new Promise((cumprirPromessa) => cumprirPromessa(3))

let p2 = new Promise(function (cumprirPromessa) {
    cumprirPromessa({
        a: 2,
        b: 3
    })
})

let p3 = new Promise((cumprirPromessa) => cumprirPromessa(
    ['Ana', 'Bia', 'Carlos', 'Daniel']))
// promises só devolve um valor, int, string, object, array e afins.
p.then(a => console.log(a))

p2.then(function (valor) {
    console.log(valor)
})

const primeiroElemento = (arrayOuString) => arrayOuString[0]

const letraParaMinuscula = (letra) => letra.toLowerCase()

// sem funções, definido diretamente
p3.then(nomes => nomes[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))

// com funções
p3.then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraParaMinuscula)
    .then(console.log)