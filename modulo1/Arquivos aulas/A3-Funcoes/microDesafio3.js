//Exercício 3 - função que soma 10.000,00 dolares a cada gol realizado

let nomeJogador = "Felipe";
let golsJogador = 0;
let precoEmDolares = 0;



let fazerGol = function() {

  golsJogador++;
  precoEmDolares += 10000;

  console.log("GOL!!!!!");
  console.log(golsJogador + ' ' + precoEmDolares);
}

fazerGol();
fazerGol();
fazerGol();

//Função hatTrick - acrescenta 10% ao valor do jogador a cada ano

let hatTrick = function() {

  golsJogador = 0;
  precoEmDolares = 0;

  console.log('\n-------------------------------------------------------------------\n');

  fazerGol();
  fazerGol();
  fazerGol();

  precoEmDolares += (precoEmDolares * 0.1);

  console.log("\nHATRICK: " + precoEmDolares);

  };

  hatTrick();
