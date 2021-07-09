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
                                      (aluno.calcularMedia() > this.notaAprovacao) && (aluno.faltas = this.faltasMax * 1.1) ? true : false;
                          
                                      return ({nome: aluno.nome, media: aluno.calcularMedia().toFixed(2), faltas: aluno.faltas, situacao: sit})})},

   adicionar: function(nome, faltas, notas) {this.listaEstudantes.push(new modelo.quorum(nome,faltas, notas)); return console.table(this.listaEstudantes)},
   
   situacao: function(nome) {let aluno = this.listaEstudantes.find(item => {return item.nome == nome ? true : false});
                            
                            return (aluno.calcularMedia() >= this.notaAprovacao) && (aluno.faltas < this.faltasMax) ?
                            
                            `Aluno: ${aluno.nome} Situação: ${true}` :
                            
                            (aluno.calcularMedia() > this.notaAprovacao) && (aluno.faltas = this.faltasMax * 1.1) ? true : false;},
    
};

/*2*/
console.log('\n----- CALCULAR MÉDIA ESPECIFICA---------------\n');
console.log(`ALUNO: ${curso.listaEstudantes[0].nome} - MÉDIA: ${curso.listaEstudantes[0].calcularMedia().toFixed(2)}`);

/*3*/

console.log('\n----- CRIAR LISTA DE ESTUDANTES ---------------\n');
console.table(curso.listaEstudantes);

/*4*/

console.log('\n----- ADD ALUNO ---------------\n');

console.log(curso.adicionar('Frederico', 3, [8,8,9,8]));

console.log('\n------ ADD FALTA --------------\n');

console.log(`ALUNO: ${curso.listaEstudantes[0].nome} - FALTAS: ${curso.listaEstudantes[0].addFaltas()}`);

/*5*/

console.log('\n----- GERANDO SITUAÇÃO ESPECIFICA -----\n');

console.log(curso.situacao('Fernando'));

/*6*/

console.log('\n----- GERANDO SITUAÇÕES ---------------\n');

console.table(curso.relatorio());