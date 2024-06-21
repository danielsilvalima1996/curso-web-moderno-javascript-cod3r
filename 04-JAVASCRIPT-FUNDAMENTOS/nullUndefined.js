const a = { name: 'Teste' }
console.log(a);
const b = a

b.name = 'Oba'
console.log(a, b);

// tipos primitivos tem copia por valor 
// tipos objetos é passagem por referência em memória
// por isso ficam com os mesmos valores se alterar em 
// uma, alterar em outra

let c = 3
let d = c

d++

console.log(c, d);

let valor // não inicializada
console.log(valor);

valor = null // ausência de valor
console.log(valor);
// console.log(valor.toString()); // erro!

const produto = {}

console.log(produto.preco);
console.log(produto);

produto.preco = 3.50
console.log(produto.preco);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco);
delete produto.preco
console.log(produto);

produto.preco = null // sem preco
console.log(!!produto.preco);
console.log(produto);