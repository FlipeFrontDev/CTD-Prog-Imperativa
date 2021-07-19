/*
1) Crie uma função, que após 5 segundos, dobre o resultado do número passado como parâmetro. Essa função deverá retornar uma Promise. Use o setTimeOut como temporizador.
*/

const dobraValor = async num => {

  /* console.log("Processando..."); */

  const promise = await new Promise((resolve) => {setTimeout(resolve, 3000, num * 2);});

 /* console.log(promise); */
 return promise;

}

/* dobraValor(5); */

/*
2) Crie uma função assíncrona que irá receber um parâmetro x. Crie três variáveis: a, b e c dentro do corpo da função. Cada uma dessas variáveis receberá um await da função do passo anterior. Você deve passar como parâmetros dessa função os números 10, 20 e 30, respectivamente.

3) Retorne a soma de todos esses elementos, inclusive o parâmetro da função assíncrona.
*/

const main = async (func, num1, num2, num3) => {

  let a, b, c, total;

  console.log('...processando:');

  a = await func(num1).then(value => {return value});
  b = await func(num2).then(value => {return value});
  c = await func(num3).then(value => {return value});

  total = `VALORES INFORMADOS: ${num1}, ${num2}, ${num3}
          \nSOMATÒRIO INFORMADO: ${num1 + num2 + num3}
          \nRESULTADOS: ${a}, ${b}, ${c}
          \nSOMATÒRIO DE RESULTADOS: ${a + b + c}`;

  return console.log(total);

}

main(dobraValor, 10, 20, 30);