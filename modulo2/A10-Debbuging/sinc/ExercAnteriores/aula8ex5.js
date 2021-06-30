let cachorro={nome: 'Mackenzie',
    idade: 6,
    sexo: 'fêmea',
    cor: 'cinza',
    comportamento: function() {return 'A '+cachorro.nome+' é muito brincalhona'}};
    
//desestruturando
let {sexo,cor, comportamento,nome}=cachorro;
console.log(comportamento());