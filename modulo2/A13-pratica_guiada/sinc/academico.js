/*Importando módulos pratica que contém o objeto exportado quorum da classe Aluno e importando também o objeto literal listaAlunos que contém as instanciações de quorum - ou seja, os novos alunos com seus dados academicos*/

let modelo = require('./pratica');
let lista = require('./listaAlunos');

/*1*/

/*Declarando objeto literal curso com seus atributos*/

let curso =
  {
   nomeCurso: 'administracao',
   notaAprovacao: 7,
   faltasMax: 5, 
   listaEstudantes: lista.listaAlunos,

   /*Atributo relatorio: contém função map, que percorre cada aluno da listaEstudantes(ou seja listaAlunos importada acima), verifica sua média e suas faltas, e retorna um novo array objeto com nome, média e situacao de cada aluno*/

   relatorio: function () {return this.listaEstudantes.map(aluno =>
                          
                          {let sit =  (aluno.calcularMedia() >= this.notaAprovacao) && (aluno.faltas < this.faltasMax) ? true :
                                      (aluno.calcularMedia() > this.notaAprovacao) && (aluno.faltas = this.faltasMax * 1.1) ? true : false;
                          
                                      return ({nome: aluno.nome, media: aluno.calcularMedia().toFixed(2), faltas: aluno.faltas, situacao: sit})})},

  /*Atributo adicionar: contém método (função) que recebe 3 argumentos: nome, faltas e notas de um aluno, e instancia um novo objeto quorum (da Classe aluno), incluindo este objeto (novo aluno) no atributo listaEstudantes(objeto listaAlunos - modulo importado acima - que está no arquivo listaAlunos)*/

   adicionar: function(nome, faltas, notas) {this.listaEstudantes.push(new modelo.quorum(nome,faltas, notas)); return console.table(this.listaEstudantes)},
   
  /*Atributo situacao: contém o método que recebe um argumento (nome) e usa o método de array "find" para retornar se o nome informado na consulta consta na lista de alunos guardando true ou false na variavel aluno*/

  /*Depois, retorna a situação de cada aluno conforme sua média e sua falta */

   situacao: function(nome) {let aluno = this.listaEstudantes.find(item => {return item.nome == nome ? true : false});
                            
                            return (aluno.calcularMedia() >= this.notaAprovacao) && (aluno.faltas < this.faltasMax) ?
                            
                            `Aluno: ${aluno.nome} Situação: ${true}` :
                            
                            (aluno.calcularMedia() > this.notaAprovacao) && (aluno.faltas = this.faltasMax * 1.1) ? `Aluno: ${aluno.nome} Situação: ${true}` :
                            
                            `Aluno: ${aluno.nome} Situação: ${false}`;},
    
};

/*Executando métodos dos objetos criados*/

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