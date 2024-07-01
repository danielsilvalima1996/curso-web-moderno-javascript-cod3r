const comprarCarro = modelo => {
    switch (modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso';
            break;
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            return 'Tem certeza que não prefere este modelo?';
            break;
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui';
            break;
    }
}

console.log(comprarCarro('hatch'));
console.log(comprarCarro('sedans'));
console.log(comprarCarro('motocicletas'));
console.log(comprarCarro('caminhonetes'));
console.log(comprarCarro('Máquinas agricolas'));