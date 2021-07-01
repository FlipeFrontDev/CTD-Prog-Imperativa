//1. Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome. Além disso, crie outro array, desta vez chamado numeros, que deve conter os valores do array numerosPrimos adicionados através do spread, juntos com outros números.

let numerosPrimos = [2, 3, 5, 7, 11, 13, 17, 19, 23];
let numeros = [...numerosPrimos, 4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
console.log([...numerosPrimos, ...numeros]);