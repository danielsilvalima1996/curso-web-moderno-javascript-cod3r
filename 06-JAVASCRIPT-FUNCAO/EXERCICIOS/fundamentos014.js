function qualFruta(fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui');
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis');
            break;
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo');
        default:
            throw('Fruta não encontrada')
    }
}

qualFruta('maçã')
qualFruta('kiwi')
qualFruta('melancia')
// qualFruta('banana')