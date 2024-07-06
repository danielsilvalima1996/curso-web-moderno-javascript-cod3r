function receberMelhorEstudante(objeto = {}) {
    const nomeENotas = []
    Object.keys(objeto).forEach(key => {
        const aluno = {
            nome: key, media:
                objeto[key].reduce((previous, current) => previous + current, 0) / objeto[key].length
        }
        nomeENotas.push(aluno)
    })
    nomeENotas.sort((a, b) => a.media > b.media ? 1 : -1)
    return nomeENotas[nomeENotas.length - 1]
}

console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}));