/*Conceito callback*/
/*Em uma função pai, podemos 'chamar e retornar' uma função filha que fará operações com parâmetros definidos na função pai*/

const dividir = (numA, numB) => (numB !== 0) ? (numA / numB) : 'Impossível dividir por 0!';

const multiplicar = (numA, numB) => numA * numB;

const subtrair = (numA, numB) => numA - numB;

const somar = (numA, numB) => numA + numB;

/*Função Pai(calculadora) recebe uma função filha como argumento (operacao)*/

const calculadora = (num1, num2, operacao) => {

  /*A função filha é chamada como função callback - função chamada de volta*/
  /*A função pai, retorna o resultado da função filha, que precisa ser impresso no console*/

  return operacao(num1, num2);

}

//O a função pai é chamada e o resultado da chamada recursiva da função finlha é registrado no console;

console.log(calculadora(10, 5, dividir));