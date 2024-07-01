const jurosSimples = (capitalInicial, taxaDeJuros, tempoDeAplicação) => capitalInicial * taxaDeJuros * tempoDeAplicação

const jurosCompostos = (capitalInicial, taxaDeJuros, tempoDeAplicação) => capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicação

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));