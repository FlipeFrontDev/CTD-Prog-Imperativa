//2. Crie uma função maiorNumero() que receba N parâmetros, e retorne o menor número entre eles, utilizando a função Math.min(). Uma observação importante é que a função Math.min() NÃO deve receber um array como parâmetro, sendo portanto, necessário expandir os valores.

//Definindo array argumento

let numerosPrimos = [2, 3, 5];

//definindo função com destructuring

function menorNumero (param) {

  return Math.min(...param);

}

console.log(menorNumero(numerosPrimos));