function arredondarNota(nota) {
    if(nota > 100 || nota < 0) {
        throw('Nota invalida')
    } else if(nota < 38) {
        return nota
    } else {
        const moduloNota = nota / 5
        if(moduloNota > 3) {
            nota = Math.ceil(nota/5) * 5
        }
        return nota
    }
}

function classificarAluno(nota) {
    const notaCorrigida = arredondarNota(nota)
    if(notaCorrigida >= 40) {
        return `Aprovado: ${notaCorrigida}`
    } else {
        return `Reprovado ${notaCorrigida}`
    }
}

console.log(classificarAluno(100))
console.log(classificarAluno(30))
console.log(classificarAluno(38))
console.log(classificarAluno(88))
console.log(classificarAluno(61))
console.log(classificarAluno(33))