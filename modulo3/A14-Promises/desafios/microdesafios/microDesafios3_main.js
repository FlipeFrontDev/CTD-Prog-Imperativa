/*Importando módulo promessa*/

const promessa = require('../microdesafios/microDesafio3');

/*executa a função importada promessa passando como argumento o arquivo file.json*/

promessa('../microdesafios/file.json')

  .then(contents => console.table(contents))
  .catch(err => console.log(err));