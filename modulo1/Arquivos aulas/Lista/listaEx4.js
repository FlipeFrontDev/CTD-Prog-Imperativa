//4)Criar uma função que escreva se um número é positivo ou negativo (considere o valor zero como positivo)

function escala(num) {

  //Operador ternário - verifica se parâmetro num é maior ou menor que zero - útil para condicionais simples

  return (num >= 0) ? 'O número ' + num + ' é positivo!' : 'O número ' + num + ' é negativo!';

}

console.log(escala(-5));