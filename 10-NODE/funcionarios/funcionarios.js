const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

/**
 * Desafio
 * Mulher chinesa com o menor salário
 */

const filtroMulheresChinesas = fil => fil.genero == 'F' && fil.pais == "China";
const menorSalario = (a, b) => a.salario < b.salario ? a : b

axios.get(url).then(response => {
    const funcionarios = response.data
    const funcionaria = funcionarios
        .filter(filtroMulheresChinesas)
        .reduce(menorSalario)
    console.log(`Mulher chinesa com o menor salário é a ${funcionaria.nome} ${funcionaria.sobrenome} ganhando ${funcionaria.salario.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' })}`);
})