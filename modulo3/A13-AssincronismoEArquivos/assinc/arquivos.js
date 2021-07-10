const fs = require('fs');
/* const fs = require('../assinc/texto.txt');
const fs2 = require('../assinc/users.json'); */
let customers = fs.readFileSync('../assinc/texto.txt', 'utf-8');
let customers2 = fs.readFileSync('../assinc/users.json', 'utf-8');

let usersJson = JSON.parse(customers2);

let insere = fs.writeFileSync('../assinc/texto.txt', 'Este é um teste! O conteúdo anterior foi removido!');
let novoArq = fs.readFileSync('../assinc/texto.txt', 'utf-8');

console.log(customers);
console.log(usersJson);
console.log(novoArq);

let filme = {

  titulo: 'Titanic',
  minutos: 560

};

let filmesJson = JSON.stringify(filme);

/*Escreve novo arquivo de texto*/

fs.writeFileSync('titanic.json', filmesJson);
let arqFilmes = fs.readFileSync('../assinc/users.json', 'utf-8');
let converteFilmes = JSON.parse(arqFilmes);
console.log(converteFilmes);

/*Adiciona texto no arquivo*/

fs.appendFileSync('texto.txt', 'Este é outro teste! Este texto não deve apagar a linha anterior!');
arqFilmes = fs.readFileSync('texto.txt', 'utf-8');
console.log(arqFilmes);