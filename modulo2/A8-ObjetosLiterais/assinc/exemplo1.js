//POO
//Funcao pai = objeto
//Funcao Filha = propriedade
// Em JS, é como Closure, só que o Pai não precisa retornar Filhoa

let tenista = {

  nome: 'Roger',
  idade: 38,
  saudacao: function() { return 'Olá, me chamo ' + this.nome + ' tenho ' + this.idade + ' anos.'; }

};

console.log(tenista.saudacao());