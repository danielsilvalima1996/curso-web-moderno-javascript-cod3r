const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo1 = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo1);

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`);
})

const config = require('./arquivo.json')
console.log(config.db);

// leitura de pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...');
    console.log(arquivos)
})