//9)Com base em dois valores, imprimir uma das três mensagens a seguir: ‘Números iguais’, caso os números sejam iguais;‘Primeiro é maior’, caso o primeiro seja maior que o segundo;‘Segundo maior’, caso o segundo seja maior que o primeiro.

//Função abaixo compara dois parametros respeitando coerção de tipos e retorna se são iguais, ou qual é maior

let comparaNumeros = (n1, n2) => {

  if (n1 === n2) {

    return 'Números iguais';

  } else if (n1 > n2) {

    return 'Primeiro maior';

  } else if (n1 < n2) {

    return 'Segundo maior';

  }
};

console.log(comparaNumeros(10, 15));