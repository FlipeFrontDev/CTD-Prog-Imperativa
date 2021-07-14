/*Exportando módulo como objeto quorum que contém classe Aluno*/

exports.quorum = class Aluno {

  /*Definindo método construtor da classe*/

  constructor(nome, faltas, notas) {

    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;

    /*Definindo métodos calcularMedia e addfaltas da classe Aluno*/

    this.calcularMedia = () => {return this.notas.reduce((acc, atual) => (acc + atual))/this.notas.length.toFixed(1)};
    this.addFaltas = () => {return faltas += 1;};
  }
};