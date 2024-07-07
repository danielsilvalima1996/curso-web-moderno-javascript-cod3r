const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro, remove o último
console.log(pilotos);

pilotos.push('Verstappen')
console.log(pilotos);

pilotos.shift() // remove o primeiro
console.log(pilotos);

pilotos.unshift('Hamilton')
console.log(pilotos);

// splice pode remover e adicionar elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

// remover
pilotos.splice(3, 1)
console.log(pilotos); // massa quebrou :(

const algunsPilotos1 = pilotos.slice(2) // volta um novo array a partir da posição
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4) // volta um novo array a partir da posição até o elemento anterior ao final (4)
console.log(algunsPilotos2);