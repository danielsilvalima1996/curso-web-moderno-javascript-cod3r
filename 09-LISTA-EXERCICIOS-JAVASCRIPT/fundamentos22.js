const funcaoDaSorte = numero => {
    const max = 10
    const min = 1
    const valor = (Math.random() * (max - min) + min).toFixed(0)
    if(valor == numero) {
        return `Parabéns! O número da sorte foi ${valor}`
    } else {
        return `Que pena! O número da sorte foi ${valor}`
    }
}

console.log(funcaoDaSorte(10));
console.log(funcaoDaSorte(5));
console.log(funcaoDaSorte(5));