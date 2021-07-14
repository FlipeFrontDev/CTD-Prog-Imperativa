const promessa = require('../microdesafios/microDesafio3');

promessa('../microdesafios/file.json')
  .then(contents => console.table(contents))
  .catch(err => console.log(err));