/*Importando modulo File System*/

const fs = require('fs');

/*Definindo função que instancia a Promisse com parâmetro "file" que recebe o arquivo a ser convertido 
em objeto literal, lido e impresso no console*/

/*Instanciando novo objeto Prommise com parâmetros resolve -> sucesso, e reject -> insucesso da execução*/

const leituraFs = file => new Promise((resolve, reject) => {

  /*Função callback: Lendo arquivo JSON - definindo gatilhos de erro e de resolucao da leitura do arquivo*/

  fs.readFile(file, (err, contents) => {err ? reject(err) : resolve(JSON.parse(contents));})})

/*Chamando função que instancia a Promisse*/

leituraFs('../microdesafios/file.json')

  /*Método then: retorna resolução da função calback - ou seja, o sucesso da leitura do arquivo*/

  .then(contents => {console.table(contents);})

  /*Método catch: retorna possível falha na função callback - ou seja, falha na leitura do arquivo*/

  .catch(err => {console.log(err);})