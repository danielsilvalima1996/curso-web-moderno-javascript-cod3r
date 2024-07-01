const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

const adicionaVetor = (vetorInicial, vetorAdicina) => {
    vetorInicial.forEach(item => vetorAdicina.push(item))
    console.log(vetorPilha);
    console.log(vetorAdiciona);
}

adicionaVetor(vetorPilha, vetorAdiciona)