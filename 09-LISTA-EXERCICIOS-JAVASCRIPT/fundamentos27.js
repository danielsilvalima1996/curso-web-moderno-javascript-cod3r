function segundoMaior(objeto = {}) {
    const novoObjeto = {}
    Object.keys(objeto).forEach(key => {
        novoObjeto[objeto[key]] = key
    })
    return novoObjeto
}

const obj = { a: 1, b: 2, c: 3 }
console.log(segundoMaior(obj));