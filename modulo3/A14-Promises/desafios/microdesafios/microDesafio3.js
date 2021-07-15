/*Importando modulo File System*/

const fs = require('fs');

/*Declarando e exportando função promessa que receberá um arquivo no parâmetro "file" e instancia a Promisse*/

function promessa(file) {

  return new Promise(function(resolve, reject) {

    fs.readFile(file, (err, contents) => {

      err ? reject(err) :
    
      console.log("lendo arquivo...");
      setTimeout(resolve, 3000, JSON.parse(contents));})})}

module.exports = promessa;