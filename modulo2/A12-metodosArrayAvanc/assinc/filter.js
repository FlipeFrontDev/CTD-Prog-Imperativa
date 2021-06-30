let idades = [22,8,17,14,30];

let maiores = idades.filter(function(idade){
  return idade > 18;
});

console.log(maiores);