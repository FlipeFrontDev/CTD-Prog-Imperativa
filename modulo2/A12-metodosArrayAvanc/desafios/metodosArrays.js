/*1 Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.*/

let pares =[2,4,6,8,10,12,14,16,18,20];

let impares = pares.map((num) => { return num -= 1;});

console.log(impares);

/*2 Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
*/

let nomes = ['Felipe', 'João', 'Maria', 'Marta', 'Marluci', 'Ana', 'Maria'];

let filtro = nomes.filter((nome) => {return nome == 'Maria';});

console.log(filtro);

/*3 Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
*/

let numeros =[2,4,6,8,10,12,14,16,18,20];

let formatados = numeros.reduce((acumulador, num) => {return `${acumulador} - ${num}`;});

console.log(formatados);

/*4 Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
*/

let animais = ['Elefante', 'Gato', 'Arara', 'Coala'];

let lista = animais.forEach((animal) => {console.log(`O animal é ${animal}`);});

console.log(lista);