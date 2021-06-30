//objeto cachorro
let cachorro={nome: 'Mackenzie',
    idade: 6,
    sexo: 'fêmea',
    cor: 'cinza',
    comportamento: function() {return 'A '+this.nome+' é muito brincalhona'}};

let dadosCachorro={...cachorro};
// dot notation
console.log(dadosCachorro.nome);