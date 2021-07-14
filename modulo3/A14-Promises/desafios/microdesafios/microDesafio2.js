/*Importando modulo File System*/

const fs = require('fs');

/*Definindo variáveis que instanciam as Promisses a serem executadas de forma assíncrona - ou seja, fora da ordem em que foi escrita - fora do tempo de execução do programa*/

/*Definindo variável file1 que instancia a Promisse que lerá o arquivo file.json*/

let file1 = new Promise((resolve, reject) => {
  
  return fs.readFile('../microdesafios/file.json', (err, data1) => {

    err ? reject(err) : resolve(JSON.parse(data1));})});

/*Definindo variável file2 que instanciam a Promisse que lerá o arquivo file2.json*/

let file2 = new Promise((resolve, reject) => {
  
  return fs.readFile('../microdesafios/file2.json', (err, data2) => {

    err ? reject(err) : resolve(JSON.parse(data2));})});

/*Definindo variável file3 que instancia a Promisse que lerá o arquivo file3.json*/

let file3 = new Promise((resolve, reject) => {
  
  return fs.readFile('../microdesafios/file3.json', (err, data3) => {

    err ? reject(err) : resolve(JSON.parse(data3));})});

/*Chamando o objeto Promisse com o método all, que executa as Promisses anteriores guardadas nas variáveis file1, file2 e file3 - de forma simultânea, e retorna seus êxitos ou possíveis falhas com métodos then e catch*/

Promise.all([file1, file2, file3])
  .then(data => {console.log(data);})
  .catch(err => {console.log(err);})