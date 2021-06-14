//Extras

//1) Escrever um programa que imprime 25 termos da série 11 - 22 - 33 

const imprimeTermos = () => {

  console.log('\nEXERCICIO EXTRA 1 --------------\n');

  let resultado = '';
  
  for(let i = 1; i <= 25; i++) {

    i < 25 ? resultado += (i * 11) + ' - ' : resultado += (i * 11); 

  }

  return resultado;

}

console.log(imprimeTermos());

//2 Mostrar os múltiplos de 8 até o valor 500. A tela deve mostrar 8 -16 -24;

const mostraMultiplos = () => {

  console.log('\nEXERCICIO EXTRA 2 --------------\n');

  let multiplo = '';
  let multiplos = '';

  for (let i = 1; i <= 500; i++) {

   if ((i % 8) == 0 && i > 8) {

      multiplos += ' - ' + i;

    } else if ((i % 8) == 0 && i == 8){

      multiplos += i;

    }
  }
  return multiplos;
}

console.log(mostraMultiplos());

//3 Usando FOR, desenvolver um programa que mostre a tabuada de 5.

const taubadaCinco = () => {

  console.log('\nEXERCICIO EXTRA 3 --------------\n');

  let valor = '';

  for (i = 0; i <= 10; i++) {

    valor += '\n' + i + ' X 5 = ' + (i * 5);

  }

  return valor;
}

console.log(taubadaCinco());