const calcularNota = (codigoAluno, nota1, nota2, nota3) => {
    if (codigoAluno >= 0) {
        const media = calcularMedia(nota1, nota2, nota3)
        const status = media >= 5 ? 'APROVADO' : 'REPROVADO'
        return `Aluno: ${codigoAluno} - Nota 1: ${nota1} | Nota 2: ${nota2} | Nota 3: ${nota3} | Média: ${media} | Status: ${status}`
    } else {
        return 'Código inválido'
    }
}

const calcularMedia = (nota1, nota2, nota3) => {
    const notas = [nota1, nota2, nota3].sort((a, b) => a < b ? 1 : -1)
    return notas[0] * 0.4 + notas[1] * 0.3 + notas[2] * 0.3
}

console.log(calcularNota(1, 2, 2, 8));
console.log(calcularNota(-1, 2, 2, 8));
console.log(calcularNota(5, 2, 5, 8));