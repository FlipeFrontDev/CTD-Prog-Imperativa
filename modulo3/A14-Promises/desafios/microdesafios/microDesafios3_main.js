/*Importando módulo promessa*/

const promessa = require('../microdesafios/microDesafio3');

/*executa a função importada promessa passando como argumento o arquivo file.json*/

promessa('../microdesafios/file.json')

/*Método then -> imprime sucesso retornado pel função callback resolve contendo o conteúdo do arquivo JSON convertido - em caso de sucesso da Promisse*/

  .then(contents => console.table(contents))

/*Método catch -> imeprime erro retornado na função callback reject da Promisse em caso de inssucesso da mesma*/

  .catch(err => console.log(err));