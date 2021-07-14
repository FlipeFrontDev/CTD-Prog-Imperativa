/*Importando módulo prática que contém a classe Aluno e armazenando na constante modelo*/

let modelo = require('./pratica');

/*Exportando objeto literal listaAlunos que contem como itens, objetos quorum instanciados com valores que entrarão no método construtor*/

exports.listaAlunos = [ new modelo.quorum('Fernando', 4, [7,7,7,7]),
                        new modelo.quorum('Clarice', 4, [7,7,7,7]),
                        new modelo.quorum('Carlos', 4, [5,5,5,5])];