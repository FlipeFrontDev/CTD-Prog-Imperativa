let filmes = ["star wars", "clube da luta", "o poderoso chefão", "top gun", "interestela", "clube da luta"];
let filmes2 = ["matrix", "clube da luta", "interestelar", "top gun", "jack-reacher", "clube da luta"];


//1
console.log(filmes[0]);

console.log(filmes.indexOf('clube da luta'));
console.log(filmes.lastIndexOf('clube da luta'));

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

console.log(mudaPalavra(filmes));

//3

console.log(filmes.push('Matrix'));
console.log(filmes.unshift('Matrix Reloaded'));

//4

console.log(filmes.pop('Matrix Reloaded'));
console.log(filmes.shift('Matrix Reloaded'));


console.log(filmes[1]);
console.log(filmes2[1]);

console.log('------------ EXERCICIO 5 ------------');

//5

filmes = ["star wars", "clube da luta", "o poderoso chefão", "top gun", "interestela", "clube da luta"];

for (let i = 0; i < filmes.length; i++ ) {

  console.log((filmes[i] == filmes2[i]) ? 'São iguais!' : 'São diferentes!');

}