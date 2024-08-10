const porta = 3003

const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    const id = req.params.id
    res.send(bancoDeDados.getProduto(id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: parseFloat(req.body.preco)
    })
    res.status(201)
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: parseFloat(req.body.preco)
    })

    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const id = req.params.id
    const produto = bancoDeDados.excluirProduto(id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);

})