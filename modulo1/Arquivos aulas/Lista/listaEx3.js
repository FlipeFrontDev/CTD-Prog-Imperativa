//3)Com base no ano atual e no ano de nascimento de uma pessoa, imprimir uma mensagem que diga se ela poderá ou não votar na próxima eleição (não é necessário considerar o mês em que a pessoa nasceu).

function verificaEleitor(dtNasc) {

  //Método split torna o parâmetro dtNasc em um vetor para que o ano seja reservado

  let dadoEleitor = dtNasc.split('/');

  // o último elemento do vetor é convertido em tipo inteiro par que seja calculada a idade do eleitor

  dadoEleitor = parseInt(dadoEleitor[2], 10)

  return (2022 - dadoEleitor) >= 18 ? 'Poderá votar!' : 'Não poderá votar!';
}

console.log(verificaEleitor('07/09/1990'));