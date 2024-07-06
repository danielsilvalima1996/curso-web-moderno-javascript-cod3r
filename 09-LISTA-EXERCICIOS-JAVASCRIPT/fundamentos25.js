function segundoMaior(palavra, array = []) {
    return array.filter(item => item.indexOf(palavra) != -1)
}

console.log(segundoMaior('pro', ['programação', 'mobile', 'profissional']));
console.log(segundoMaior('python', ['javascript', 'java', 'c++']));