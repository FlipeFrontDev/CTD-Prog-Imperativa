//Programação imperativa
//Exedrcício 3

// 1) Em um novo arquivo chamado ex3.js, exiba na tela a soma de dois números.

console.log(5 + 2);

// 2)  Repita o processo anterior, mas utilizando outro operador.

console.log(5 % 2)

//3) Declare e atribua 2 variáveis ​​numéricas independentes. Exiba a soma de ambas na tela.

var num1 = 5;
var num2 = 3;

console.log(num1 + num2);

// 4) Atribua a soma das duas variáveis ​​anteriores a uma outra variável e exiba-a na tela.

var resultado = num1 + num2;

console.log(resultado);

//5) Re-atribua à variável anterior "1" +1, e exiba na tela. (O que  aconteceu?)

resultado = "1" + 1;

console.log("R: Os dados são concatenados e tornam-se do tipo String");
console.log(resultado);

//6) Re-atribua "olá" + 23, e exiba na tela. (O que aconteceu?)

resultado = "olá" + 23;

console.log("Os dados são concatenados novamente:\n")
console.log(resultado)

//7) Crie mensagens concatenadas com valores diferentes.


console.log(resultado += " , está tudo bem com você?");
console.log(resultado += " , 23/2 é: " + (23/2));
console.log("12" / 4);
console.log("doze" / 4 + " dará erro.");

resultado = num1 + num2;
console.log(resultado + "10");