const calcularValorTotal = (codigo, quantidade) => {
    let valor, descricao
    switch (codigo) {
        case 100:
            valor = 3.00
            descricao = 'Cachorro Quente'
            break
        case 200:
            valor = 4.00
            descricao = 'Hambúrguer Simples'
            break
        case 300:
            valor = 5.50
            descricao = 'Cheeseburguer'
            break
        case 400:
            valor = 7.50
            descricao = 'Bauru'
            break
        case 500:
            valor = 3.50
            descricao = 'Refrigerante'
            break
        case 600:
            valor = 2.80
            descricao = 'Suco'
            break
        default:
            return 'Código inválido'
    }
    const total = quantidade * valor
    return `Pedido ${codigo} - ${descricao} | Quantidade: ${quantidade} | Valor unitário: ${formatarNumero(valor)} | Total: ${formatarNumero(quantidade * valor)}`
}

const formatarNumero = (numero = 0) => numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

console.log(calcularValorTotal(100, 5))
console.log(calcularValorTotal(200, 2))
console.log(calcularValorTotal(300, 3))
console.log(calcularValorTotal(400, 4))
console.log(calcularValorTotal(500, 1))
console.log(calcularValorTotal(600, 6))
console.log(calcularValorTotal(700, 1))