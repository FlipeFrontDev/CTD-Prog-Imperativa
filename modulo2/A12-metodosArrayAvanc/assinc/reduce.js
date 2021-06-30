let numeros = [5,7,16];

let soma = numeros.reduce(
  function(acumulador, numero) {
    return acumulador + numero;
  }
);

console.log(soma);