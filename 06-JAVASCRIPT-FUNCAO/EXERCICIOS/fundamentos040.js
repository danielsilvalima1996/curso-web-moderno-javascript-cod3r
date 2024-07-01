const conceitoNotas = (notas = []) => {
    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i]
        let conceito;
        if (nota < 5.0) {
            conceito = 'D'
        } else if (nota < 7.0) {
            conceito = 'C'
        } else if (nota < 9.0) {
            conceito = 'B'
        } else {
            conceito = 'A'
        }
        console.log(`Nota: ${nota}, Conceito: ${conceito}`);
    }
}

const notas = [3.2, 6.0, 7.3, 9.0, 10]
conceitoNotas(notas)