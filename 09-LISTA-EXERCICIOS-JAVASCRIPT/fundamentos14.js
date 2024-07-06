const objetoParaArray = objeto => {
    const array = []
    Object.keys(objeto).forEach(key => {
        array.push([key, objeto[key]])
    })
    return array
}

const pessoa = {
    nome: 'Maria',
    profissao: 'Desenvolvedora de Software'
}
console.log(objetoParaArray(pessoa));

const produto = {
    codigo: 11111,
    preco: 12000
}
console.log(objetoParaArray(produto));