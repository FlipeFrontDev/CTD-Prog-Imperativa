/*Slice*/

let numeros = [3,4,5,6,7];

let subArray = numeros.slice(0, 3);

let marcas = ['samsung', 'xiaomi', 'apple'];

console.log(subArray);

/*Splice*/

numeros.splice(0, 0, 2);
console.log(numeros);

numeros.splice(1, 2);
console.log(numeros);

console.log(marcas.sort());

/*Sort com números*/

let numeros2 = [10, 3, 4, 52, 6, 7];

numeros2.sort(
  function(a, b){
    return a-b;
  });

  /*Flat*/

  let numeros3 = [1, 2, 3, [4], [[5, 6]]];

  let novoArray = numeros3.flat(2);

  console.log(novoArray);

  /*includes*/

  let existe = numeros3.includes(1);
  console.log(existe);

  /*find*/

  let moedas = [

    {nome: 'Bitcoin', simbolo: 'BTC'},
    {nome: 'Bitcoin', simbolo: 'BTC'},
    {nome: 'Ethereum', simbolo: 'ETH'},
    {nome: 'Cardano', simbolo: 'ADA'},

  ];

  moedas.find(

    function(moeda) {

      return moeda.nome === 'Bitcoin';

    }
  );