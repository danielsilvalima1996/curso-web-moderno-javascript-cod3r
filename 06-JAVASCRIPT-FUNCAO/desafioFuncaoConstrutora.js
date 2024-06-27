// Minha solução
function PessoaDaniel(nome) {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p1 = PessoaDaniel('Daniel Dev')
p1.falar()

// Solução do curso

function Pessoa(nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p2 = new Pessoa('Daniel')
p2.falar()