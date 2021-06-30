let arrFunctions = require('./node_modules/lodash/lastIndexOf');
let upper = require('./node_modules/lodash/toUpper');
let calculadora = require('./modules.js');

let calcular = new calculadora.calc(2,2);

console.log(calcular.somar());
console.log(calcular.subtrair());
console.log(calcular.multiplicar());
console.log(calcular.dividir());

let arr = ['Abacaxi', 'Morango', 'Laranja', 'Mamão', 'Abacaxi'];

console.log(arrFunctions(arr));