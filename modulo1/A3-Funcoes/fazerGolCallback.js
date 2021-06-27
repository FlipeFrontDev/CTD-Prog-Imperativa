//Exercício 3 - função que soma 10.000,00 dolares a cada gol realizado

//Variaveis globais para uso entre funções.

let nomeJogador = 'Felipe';
let golsJogador = 0;
let valorEmDolares = 0;

let fazerGol = () => {

  //Contador de gols

  golsJogador++;

  //Contador de valor por gol feito - $10,000.00 a cada gol

  valorEmDolares += 10000;

  //Adicionado método toLocaleString para converter o valor em dólares, como pede o exercício

  return 'GOL!!!!!' + '\nGols do ' + nomeJogador + ': ' + golsJogador + ' Valor de mercado: ' + valorEmDolares.toLocaleString('en', {style: 'currency', currency: 'USD'});
}

/*Imprime resultado da primeira função*/

console.log(fazerGol());
console.log(fazerGol());
console.log(fazerGol());

//Função hatTrick - acrescenta 10% ao valor do jogador a cada ano

let hatTrick = (funcao, gols) => {

  //Zera os contadores para não pegar resultados anteriores

  golsJogador = 0;
  valorEmDolares = 0;

  //chama a função 3 vezes

  for (let i = 0; i < gols; i++) {  funcao(); }

  //Acrescenta 10% a mais por ano (ou seja, 10% a mais no total de gols) em comparação com o valor atual;

  valorEmDolares += (valorEmDolares * 0.1);

  //Adicionado método toLocaleString para converter o valor em dólares, como pede o exercício

  return  '\n-------------------------------------------------------------------\n' +
          '\nHATRICK: ' + '\n\nValor do jogador ' + nomeJogador + ': ' +   valorEmDolares.toLocaleString('en', {style: 'currency', currency: 'USD'});
  };

  console.log(hatTrick(fazerGol, 3));
