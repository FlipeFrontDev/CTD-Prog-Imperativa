function calcularIndiceDeMassaCorporal(peso, altura) {

  altura /= 100;

  return (peso/(Math.pow(altura, 2))).toFixed(2);

  //Altura: altura * altura, altura ** 2, Math.pow(altura, 2);

}

console.log("-----------");

console.log("Meu IMC é: " + calcularIndiceDeMassaCorporal(70, 168));

let imc = function(peso, altura) {

  altura /= 100;

  return (peso/(Math.pow(altura, 2))).toFixed(2);

}

console.log("Meu IMC é: " + imc(70, 168));