Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.42}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços
const transformarObject = e => JSON.parse(e)
const retornarPreco = e => e.preco
const precos = carrinho.map2(transformarObject).map2(retornarPreco)

console.log(precos);