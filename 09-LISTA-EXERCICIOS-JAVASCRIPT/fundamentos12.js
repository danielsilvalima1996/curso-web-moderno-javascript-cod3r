function removerPropriedade(objeto = {}, propriedade) {
    const newObjeto = {}
    Object.keys(objeto).forEach(key => {
        if (key != propriedade) {
            newObjeto[key] = objeto[key]
        }
    })
    return newObjeto
}

const obj1 = { a: 1, b: 2}
console.log(Object.is(removerPropriedade(obj1, 'a')), obj1);
const obj2 = { id: 20, nome: 'caneta', descricao: 'Não preenchido'}
console.log(Object.is(removerPropriedade(obj2, 'descricao')), obj2);