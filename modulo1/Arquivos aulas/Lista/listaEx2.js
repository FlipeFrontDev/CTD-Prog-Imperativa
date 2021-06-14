//2)Considere duas notas referentes a avaliações efetuadas por um aluno. Calcular a média aritmética e imprimir uma mensagem que diga se o aluno foi ou não aprovado (considerar que média igual ou maior que 6 o aluno é aprovado). Imprimir também a média calculada.

function media(n1, n2) {

  //Variável média é reservada para que seja escrita na impressão da função

  let media = (n1 + n2) / 2;

  //condicional ternária define se aluno alcançou ou não a média

  let situacao = media >= 6 ? 'Aprovado' : 'Reprovado';

  return 'MÉDIA = ' + media + '\nSITUAÇÃO = ' + situacao;

}

console.log(media(6, 5));