function calcularTempo(altura1, taxa1, altura2, taxa2) {
    if (altura1 > altura2 && taxa2 > taxa1) {
        let qtdAnos = 0
        while (altura1 > altura2) {
            altura1 += taxa1
            altura2 += taxa2
            qtdAnos++
        }
        return qtdAnos
    }
}

function taxaCrescimentoCriancas(altura1, taxa1, altura2, taxa2) {
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            return `A criança 1 irá ficar mais alta que a criança 2 em 1 ano`
        } else if (taxa2 > taxa1) {
            return `A criança 2 irá ficar mais alta que a criança 1 em 1 ano`
        } else {
            return `As crianças tem as mesmas alturas e crescimento`
        }
    } else {
        if(altura1 > altura2) {
            if(taxa1 >= taxa2) {
                return `A criança menor não irá ultrapassar a criança maior`
            } else {
                return `A criança menor irá ultrapassar a criança maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)}`
            }
        } else{
            if(taxa2 >= taxa1) {
                return `A criança menor não irá ultrapassar a criança maior`
            } else {
                return `A criança menor irá ultrapassar a criança maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)}`
            }
        }
    }
}

console.log(taxaCrescimentoCriancas(100, 5, 90, 6));