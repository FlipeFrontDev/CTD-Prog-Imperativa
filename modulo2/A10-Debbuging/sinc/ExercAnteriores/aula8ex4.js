//desestruturar=> extrair valores de objetos ou arrays
//não modifica o array ou objeto original

//array
let frutas=['Morango','Manga','Limão'];
//console.log(frutas[0]);
//simplificar
//console.log(frutas);
let [fr1,_,fr3]=frutas;   //_ ou espaço
console.log(fr3.toUpperCase());