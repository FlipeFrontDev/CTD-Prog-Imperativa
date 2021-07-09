exports.quorum = class Aluno {

  constructor(nome, faltas, notas) {

    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = () => {return this.notas.reduce((acc, atual) => (acc + atual))/this.notas.length.toFixed(1)};
    this.addFaltas = () => {return faltas += 1;};
  }
};