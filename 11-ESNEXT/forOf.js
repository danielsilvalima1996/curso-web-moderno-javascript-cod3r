for (const letra of "Cod3r") {
    console.log(letra);
}

const assuntoEcma = ['Map', 'Set', 'Promise']

for (const i in assuntoEcma) {
    console.log(i);
}

for (const assunto of assuntoEcma) {
    console.log(assunto);
}

const assuntoMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (const assunto of assuntoMap) {
    console.log(assunto);
}

for (const chave of assuntoMap.keys()) {
    console.log(chave)
}

for (const valor of assuntoMap.values()) {
    console.log(valor)
}

for (const [chave, valor] of assuntoMap.entries()) {
    console.log(chave, valor);
}

const s = new Set(['a', 'b', 'c'])

for(const letra of s) {
    console.log(letra)
}