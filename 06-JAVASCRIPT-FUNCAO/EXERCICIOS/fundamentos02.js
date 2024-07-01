/** 
 * Equilátero: Os três lados são iguais. 
 * Escaleno: Todos os lados são diferentes. 
 * Isósceles: Dois lados iguais. 
*/

function tipoTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB == ladoC) {
        return 'Equilátero'
    } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
        return 'Escaleno'
    } else {
        return 'Isósceles'
    }
}

console.log(tipoTriangulo(1, 1, 1)) // Equilátero
console.log(tipoTriangulo(3, 3, 3)) // Equilátero
console.log(tipoTriangulo(1, 2, 3)) // Escaleno
console.log(tipoTriangulo(4, 3, 2)) // Escaleno
console.log(tipoTriangulo(0, 1, 13)) // Escaleno
console.log(tipoTriangulo(1, 1, 2)) // Isósceles
console.log(tipoTriangulo(1, 2, 2)) // Isósceles
console.log(tipoTriangulo(2, 1, 2)) // Isósceles