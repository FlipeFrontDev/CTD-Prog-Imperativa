//10)Escreva uma função que considere o número de litros vendidose o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 5,20 e o preço do litro do álcool é R$ 4,20

//A função abaixo calcula e retorna o valor do abastecimento

let calculaVenda = function(dadosVenda) {

  let tipoCombustivel = dadosVenda[0];
  let litros = parseInt(dadosVenda[1]);

  switch (tipoCombustivel) {

    case 'A':

      return litros * 4.2;
    
    case 'G':

      return litros * 5.2;

    default:

      return 'Digite um tipo de dado aceitável sendo: A - para Álcool e G para Gasolina';
      
  }

}

//A função abaixo imprime o retorno do calculo de cada cliente conforme parametros passados entre as funções

let imprimeSubTotal = function(dados) {

  combustivel = dados[0];
  litros = parseFloat(dados[1]);
  valor = calculaVenda(dados);

  return  '-------- AUTO-POSTO BE-ERRE ---------------' +
          '\n\n------ CUPOM FISCAL - SUBTOTAL  -------\n\n' +

          'COMBUSTÍVEL: ' +
          combustivel + ' ' +
          '\nLITROS: ' +
          litros.toLocaleString('pt-BR') + ' ' +
          '\nVALOR A SER PAGO = ' +
          valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) +
          '\n\n';
}

console.log(imprimeSubTotal(['A', 10]));