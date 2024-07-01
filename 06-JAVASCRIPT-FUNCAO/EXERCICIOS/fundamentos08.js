const stringPontuacoes = '10 20 20 8 25 3 0 30 1'
function verificarResultados(pontuacoes = '') {
    const arrPontos = pontuacoes.split(' ').map(map => Number(map))
    let melhorPontuacoes = 0
    let piorPontuacao = 0

    for (let index = 0; index < arrPontos.length; index++) {
        const valorAtual = arrPontos[index]
        if (index != 0 && valorAtual > arrPontos[index - 1]) {
            melhorPontuacoes++;
        } else {
            piorPontuacao = index - 1
        }
    }
    return [melhorPontuacoes, piorPontuacao]
}

console.log(verificarResultados(stringPontuacoes));