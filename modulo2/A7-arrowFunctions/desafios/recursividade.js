/* const fatorial = (numero) => {

for(let i = numero; i > 1; i--) {

  numero *= (i-1);

}

return numero;

}

console.log(fatorial(5)); */

//Recursivo

let fat = 5;

const fatorialRecursivo = (fat) => {
 
  let cont = fat;
  
  fat *= (fat - 1);

  if (cont > 1) {

    cont --;
    
    fatorialRecursivo(cont);
  }
  return fat;
}

console.log(fatorialRecursivo(5))