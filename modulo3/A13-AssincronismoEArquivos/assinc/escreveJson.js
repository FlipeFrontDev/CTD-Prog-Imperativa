let fs = require('fs');

let filme = {

  titulo: 'Titanic',
  minutos: 560

}

let filme2 = {

  titulo: 'Matrix',
  minutos: 600

};

let filmesJson = JSON.stringify(filme);

fs.writeFileSync('titanic.json', filmesJson);
let arqFilmes = fs.readFileSync('titanic.json', 'utf-8');
let converteFilmes = JSON.parse(arqFilmes);
console.log(converteFilmes);

let filme2Json = JSON.stringify(filme2);
fs.appendFileSync('titanic.json', filme2Json)

let arqFilme2 = fs.readFileSync('titanic.json', 'utf-8');
let converteFilme2 = JSON.parse(arqFilme2);
console.log(converteFilme2);