/*Importando módulo prática*/

let modelo = require('./pratica');

/*Exportando objeto literal listaAlunos*/

exports.listaAlunos = [ new modelo.quorum('Fernando', 4, [7,7,7,7]),
                        new modelo.quorum('Clarice', 4, [7,7,7,7]),
                        new modelo.quorum('Carlos', 4, [5,5,5,5])];