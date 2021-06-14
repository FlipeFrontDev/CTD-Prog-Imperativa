//Microdesafios
//1

let filmes = ["star wars", "clube da luta", "o poderoso chefão", "top gun", "interestelar"];
let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"]

console.log(filmes[1]);

//2


let mudaPalavra = (array) => {

  console.log('Array inicial: ' + filmes);

  let ultimaPalavra;

  for (let i = 0; i < array.length; i++) {

    ultimaPalavra = array.pop();
    ultimaPalavra = ultimaPalavra.toUpperCase();
    array.unshift(ultimaPalavra);

  }
  return filmes;
}

console.log(mudaPalavra(filmes))

//2 Alternativo

let mudaPalavra2 = (array) => {

  for (let i = 0; i<array.length; i++) {

    array[i] = array[i].toUpperCase();

  }

  return array;

}

console.log(mudaPalavra2(filmes));

//Aprender map, filter, reduce

//4 - Array criado

//3

let addFilme = () => {

  cartoons.pop();

  for (let i = 0; i < cartoons.length; i++) {

    filmes.push(cartoons[i].toUpperCase());

  }

  return filmes;

}

console.log(addFilme());

//5 - Implementado no exercicio 4

//6 

console.log('----- EXERCICIO 6 -----');

let comparaNumeros = () => {

  const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
  const euroScores = [8, 10, 6, 8, 10, 6, 7, 9]; 

  let resultado = '';

  for (let i = 0; i < asiaScores.length; i++) {

    resultado += (asiaScores[i] == euroScores[i]) ? '\nNotas iguais' : '\nNotas diferentes!';

  }

  return resultado;

}

console.log(comparaNumeros());