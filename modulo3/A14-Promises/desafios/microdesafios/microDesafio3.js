/*Importando modulo File System*/

const fs = require('fs');

/*Declarando função promessa que receberá um arquivo no parâmetro "file" e instancia a Promisse assincrona - fora do tempo de execução*/

function promessa(file) {

  /*Instanciando novo objeto Prommise com parâmetros que são funções callback sendo: resolve -> sucesso da promisse, e reject -> insucesso da execução da promisse*/

  return new Promise(function(resolve, reject) {

    /* chamando objeto fs com método readFile, que lerá o arquivo informado no parâmetro file, e declara a função callback com dois parâmetros -> err: erro na leitura do arquivo, contents: conteúdo do arquivo lido em caso de sucesso na leitura */

    fs.readFile(file, (err, contents) => {
      
      /*Condicional ternária: em caso de erro executa a callback reject com o erro informado no argumento err*/

      err ? reject(err) :
     
      /*Após os : significa o else -> ou seja, caso não dê erro, imprime mensagem no log: "lendo arquivo..."  e executa a função callback resolve, após 3 segundos, convertendo o conteúdo do arquivo JSON em objeto literal JS*/
    
      console.log("lendo arquivo...");
      setTimeout(resolve, 3000, JSON.parse(contents));})})}

/*Exporta a função promessa como módulo*/

module.exports = promessa;