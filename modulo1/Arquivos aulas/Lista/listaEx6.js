//6)Criar uma função que considere o número da conta do cliente, saldo, débito e crédito. Calcular e imprimir o saldo atual (saldo atual = saldo- débito + crédito). Também testar se saldo atual for maior ou igual a zero imprimir a mensagem 'Saldo Positivo', senão imprimir a mensagem 'Saldo Negativo'.

//A função abaixo recebe os dados passados pela função verificaSaldo, calcula e imprime o saldo atual
//Variáveis declaradas somente no escopo de cada função para otimizar uso de memória

let calculaSaldo = function(dadosCliente) {

  let conta = dadosCliente[0];
  let saldoAnterior = parseFloat(dadosCliente[1]);
  let debito = parseFloat(dadosCliente[2]);
  let credito = parseFloat(dadosCliente[3]);

  let saldoAtual = ((saldoAnterior - debito) + credito);

  console.log('\n------------------------------------------------  BANCO REMOTO -------------------------------------------------------------\n');  
  console.log('\n----------------------------------------------- DADOS DO CLIENTE------------------------------------------------------------\n');  

  console.log('CONTA CORRENTE Nº: ' + conta);
  console.log('SALDO ANTERIOR: ' + saldoAnterior.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
  console.log('DÉBITOS TOTAIS: ' + debito.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
  console.log('CRÉDITOS TOTAIS: ' + credito.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

  console.log('\n------------------------------------------------ DADOS DA CONTA --------------------------------------------------------------\n');

  console.log('\nSALDO ATUAL = ' +  saldoAtual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

  return saldoAtual;

}

//A função abaixo verifica a situação financeira passando os dados do cliente em um vetor como parametro entre duas funções, só para praticar.

let verificaSaldo = function(dadosConta) {

  return saldoAtual(dadosConta) > 0 ? 'SITUAÇÃO = SALDO POSITIVO!\n' : 'SITUAÇÃO = SALDO NEGATIVO!\n';

}

console.log(verificaSaldo([0000000001, 200, 500, 100]));