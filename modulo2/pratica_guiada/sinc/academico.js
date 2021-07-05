let modelo = require('./pratica');
let lista = require('./listaAlunos');

/*1*/

let curso =
  {
   nomeCurso: 'administracao',
   notaAprovacao: 7,
   faltasMax: 5, 
   listaEstudantes: lista.listaAlunos,
   relatorio: function () {return this.listaEstudantes.map(aluno =>
                          {let sit =  (aluno.calcularMedia() >= this.notaAprovacao) && (aluno.faltas < this.faltasMax) ? true :
                                      (aluno.calcularMedia() > this.notaAprovacao) && (aluno.faltas = this.faltasMax + (this.faltasMax * 0.1)) ? true : false;
                          return ({nome: aluno.nome, situacao: sit})})},

   adicionar: function(aluno) {this.listaEstudantes.push(aluno); return this.listaEstudantes},
   situacao: function(nome) {let aluno = this.listaEstudantes.find(item => {return item.nome == nome ? true : false});
                            return (aluno.calcularMedia() >= this.notaAprovacao) && (aluno.faltas < this.faltasMax) ? true :
                            (aluno.calcularMedia() > this.notaAprovacao) && (aluno.faltas = this.faltasMax + (this.faltasMax * 0.1)) ? true : false;},
    
};

/*2*/
console.log('----- CALCULAR MÉDIA ---------------');
console.log(curso.listaEstudantes[0].calcularMedia());

/*3*/

console.log('----- CRIAR LISTA DE ESTUDANTES ---------------');
console.table(curso.listaEstudantes);

/*4*/

console.log('----- ADD ALUNO ---------------');

console.log(new modelo.quorum('Marcelo', 3, [8,8,9,8]));
console.log(curso.listaEstudantes[0].addFaltas());

/*5*/

console.log('----- GERANDO SITUAÇÃO ESPECIFICA -----');

console.log(curso.situacao('Fernando'));

/*6*/

console.log('----- GERANDO SITUAÇÕES ---------------');

console.table(curso.relatorio());