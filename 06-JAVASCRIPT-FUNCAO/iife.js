// IIFE - Emmediately Invoked Function Expression
(function () {
    console.log('Será executado na hora!!');
    console.log('Foge do esposo mais abrangente!!'); // fora do escopo global
})()

// para ser chamada na hora, basta colocar dentro dos parenteses (function(){})()