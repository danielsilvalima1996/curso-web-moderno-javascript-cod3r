const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.42}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços
const transformarObject = e => JSON.parse(e)
const retornarPreco = e => e.preco
const precos = carrinho.map(transformarObject).map(retornarPreco)

console.log(precos);