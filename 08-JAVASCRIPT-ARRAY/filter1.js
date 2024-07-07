const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(p => {
    return false
}));

const produtosFrageis = e => e.fragil
const produtosAcima500 = e => e.preco >= 500

const resultado = produtos.filter(produtosFrageis).filter(produtosAcima500)
console.log(resultado);