/*Criar uma arrow function que receba a altura em centimetros e o peso em quilogramase calcule o IMC do usuario (peso/ altura^2) */

const calculaImc = (peso, altura) => (peso / ((altura/100)**2));

console.log(calculaImc(75, 180));