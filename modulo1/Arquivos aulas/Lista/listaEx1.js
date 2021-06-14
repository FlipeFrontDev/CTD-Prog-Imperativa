//1)Criar uma função para verificar se um número é par ou ímpar. Um número é par quando na divisão por 2 o resto é 0

function verificaNumero(num) {

  //Condicional ternária - verifica se resto do parâmetro num é igual a 0

  return num % 2 == 0 ? 'Par' : 'Impar';

}

console.log(verificaNumero(5));