const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf-8', (err, conteudo) => {
            resolve(conteudo.toString())
        })
    });
}

const caminho = path.join(__dirname + '/arquivo.txt')
lerArquivo(caminho)
.then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(', '))
    .then(str => `O valor final é: ${str}`)
    .then(console.log)