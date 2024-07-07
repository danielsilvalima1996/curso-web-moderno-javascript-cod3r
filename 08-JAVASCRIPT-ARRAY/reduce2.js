const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?

const todosSaoBolsistas = alunos.map(aluno => aluno.bolsista)
    .reduce((previous, current) => previous && current)
console.log(`Todos são bolsistas? ${todosSaoBolsistas}`);

// Desafio 2: algum aluno é bolsista?

const umAlunoBolsista = alunos.map(aluno => aluno.bolsista)
    .reduce((previous, current) => previous || current)
console.log(`Algum aluno bolsista? ${umAlunoBolsista}`);