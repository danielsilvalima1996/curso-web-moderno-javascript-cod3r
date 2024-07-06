function depesasTotais(array = []) {
    const soma = array.map(item => item.preco)
        .reduce((previous, current) => previous + current, 0)
    return soma
}

const array1 = [
    { nome: 'Jornal Online', categoria: 'Informação', preco: 89.99 },
    { nome: 'Cinema', categoria: 'Entreterimento', preco: 150 }
]
console.log(depesasTotais(array1))

const array2 = [
    { nome: 'Galaxy S20', categoria: 'Eletrônicos', preco: 3599.99 },
    { nome: 'MacBook Pro', categoria: 'Eletrônicos', preco: 30999.90 }
]
console.log(depesasTotais(array2))