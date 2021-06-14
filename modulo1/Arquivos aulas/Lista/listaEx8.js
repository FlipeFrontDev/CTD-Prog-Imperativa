//8)Criar uma função que verifique se um valor é positivo, negativo ou zero.

//Função abaixo usa condicional para verificar se o número informado no parâmetro num é igual, maior ou menor que zero

let verificaNumero = function(num) {

  if (num > 0) {

    return 'Número positivo!';

  } else if (num === 0) {

    return 'Número igual a zero!'

    //caso as condições acima não sejam satisfeitas, só resta a opção de ser negativo

  } else {

    return 'Número negativo!';

  }
}

console.log(verificaNumero(0));