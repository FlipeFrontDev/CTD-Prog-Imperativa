//Exercitando o loops com funções

let tabuada = (num) => {

  let resultado = 0;

  //o primeiro laço atua como multiplicando - 2º elemento da expressão de multiplicação

  for(i = 0; i <= 10; i++) {

    //O segundo laço atua como multiplicador - 1º elemento da expressão de multiplicação
    //o parametro num é passado como multiplicador para definir o número da tabuada

    for(j = num; i <= 10; i++) {

      resultado == 0 ? resultado = (j + ' X ' + i + ' = ' + (j * i)) : resultado += ('\n' + j + ' X ' + i + ' = ' + (j * i));

    }
  }

  return resultado;
}

console.log(tabuada(10));