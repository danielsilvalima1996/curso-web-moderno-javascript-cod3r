function imprimirImpares(inicio = 0, fim = 100) {
    if(inicio < 0 || fim > 100) {
        throw('Números foram do esperado [0, 100]')
    }

    const vetorAuxiliar = [inicio, fim].sort((a, b) => a > b ? 1 : -1)
    inicio = vetorAuxiliar[0]
    fim = vetorAuxiliar[1]
    const vetorImpares = []
    for (let index = inicio; index <= fim; index++) {
        if(index % 2 == 1) {
            vetorImpares.push(index)
        }
    }
    console.log(vetorImpares.join(', ', '\n'));
}

imprimirImpares(1,100)
imprimirImpares(100,15)
imprimirImpares(-1,101)