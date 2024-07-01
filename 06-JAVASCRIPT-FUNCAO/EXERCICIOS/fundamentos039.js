function trocarValoresVetores(vetorA = [], vetorB = []) {
    const length = vetorA.length
    if (vetorA.length != vetorB.length) {
        throw ('Vetores de tamanhos diferentes, não é possível trocar os seus valores')
    }
    for (const key in vetorA) {
        vetorB.push(vetorA[key])
    }

    vetorA = []
    for (let index = 0; index < vetorB.length; index++) {
        if (index < length) {
            vetorA.push(vetorB[index])
            delete vetorB[index]
        }
    }

    vetorB = vetorB.filter(fil => fil != null)

    console.log('vetorA', vetorA);
    console.log('vetorB', vetorB);
}

const vetorA = [1, 2, 3]
const vetorB = [4, 5, 6]

trocarValoresVetores(vetorA, vetorB)

// Solução do professor
// function trocaValores(vetorA, vetorB) {
//     if (vetorA.length == vetorB.length) {
//         for(let i = 0; i < vetorA.length; i++){
//             vetorA[i] = vetorA[i] + vetorB[i]
//             vetorB[i] = vetorA[i] - vetorB[i]
//             vetorA[i] = vetorA[i] - vetorB[i]
//         }
//     } else {
//         return 'Vetores de tamanhos diferentes.'
//     }

//     console.log('Novo vetor A: ' + vetorA)
//     console.log('Novo vetor B: ' + vetorB)
// }

// let vetorA = [1, 2, 3]
// let vetorB = [4, 5, 6]

// trocaValores(vetorA, vetorB)