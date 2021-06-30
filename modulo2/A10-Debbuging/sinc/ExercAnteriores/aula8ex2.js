//trabalhando com mais de um objeto
let cachorro={
    nome: 'Mackenzie',idade: 6, sexo: 'fêmea', cor: 'cinza', imprimirComportamento: function() {return 'A '+this.nome+' é muito brincalhona'}};

let gato={
    nome: 'Tiffany e Daphne',
    idade: 11,
    sexo: 'fêmeas',
    cor: 'marrom e branca'};

// console.log('Eu tenho 3 animais:',cachorro.nome,',',gato.nome);

console.log(cachorro.imprimirComportamento());