/*Importando modulo File System*/

const fs = require('fs');

/*Definindo e chamando a função que instancia a Promisse de leitura do arquivo*/

const leituraFs = file => new Promise((resolve, reject) => {

  fs.readFile(file, (err, contents) => {err ? reject(err) : resolve(JSON.parse(contents));})})


leituraFs('../microdesafios/file.json')
  .then(contents => {console.table(contents);})
  .catch(err => {console.log(err);})