//7)Faça um programa que considere: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima em estoque deum produto. Calcular e imprimir a quantidade média (quantidade média = (quantidade máxima + quantidade mínima) /2). Se a quantidade em estoque for maior ou igual a quantidade média imprimir a mensagem 'Não efetuar compra', senão imprimir a mensagem 'Efetuar compra'.

//[PERGUNTA AO PROFESSOR]: Comecei a aplicar algumas organizações entre funções - uma chamando outra. Fiz correto? O pessoal faz isso na real?
//Função abaixo calcula a média conforme dados do estoque passados por array ou dicionario
//Variaveis em escopo local para otimizar memória

let calculaMediaEstoque = function(dados) {

  let estoqueMaximo = parseInt(dados[1]);
  let estoqueMinimo = parseInt(dados[2]);

  return (estoqueMaximo + estoqueMinimo) / 2;

};

//Função abaixo imprime os dados processados, só é chamada pela rotina especifica 

let relatorioEstoque = function(dadosAtuaisEstoque) {

  let estoqueAtual = parseInt(dadosAtuaisEstoque[0]);
  let mediaEstoque = calculaMediaEstoque(dadosAtuaisEstoque);

  return estoqueAtual >= mediaEstoque ? 
    '\nEstoque atual: ' + estoqueAtual.toLocaleString('pt-br') + ' peças ' +
    '\nEstoque médio: ' + mediaEstoque.toLocaleString('pt-br') + ' peças ' +
    ' \n--------------------------------------------' +
    
    '\nNão efetuar compra!\n':

    '\nEstoque atual: ' + estoqueAtual.toLocaleString('pt-br') + ' peças ' +
    '\nEstoque médio: ' + mediaEstoque.toLocaleString('pt-br') + ' peças ' +
    '\n---------------------------------------------' +
    
    '\nO.S.: Efetuar compra!\n';

};

console.log(relatorioEstoque([500, 1000, 200]));