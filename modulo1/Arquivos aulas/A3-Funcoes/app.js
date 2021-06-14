//Nome da função é explicito na sua declaração

console.log('\n------- Função declarada -------\n');

function darOi() {

  console.log('Olá, tudo bem?');

}

darOi();

//Nome da função é o nome da variável

console.log('\n------- Função expressa -------\n');

let somar = function() {

  console.log(1 + 2);

};

somar();

//A chamada das funções (declarada ou expressa) é igual - com ou sem parametros

console.log('\n----- Função expressa com parametros -----\n')

let somarExpress = function (numA, numB) {
  console.log(numA + numB);
};

somarExpress(1, 2);

//Se o resultado estiver em variável, basta imprimir a variável ou passar a função como argumento de Console.log

console.log('\n----- Função expressa c/ params. - resultado em variável -----\n')

let somarParams = function(numA, numB) {

  return (numA + numB);

};

let resultParams = somarParams(10, 20);

console.log(somarParams(10, 25));

console.log('\n------ Escopo local -------\n');

function somarLocal(a, b) {

  let resultLocal = a + b;
  console.log(resultLocal);
}

somarLocal(5, 5);

console.log("\n----- Escopo Global -----\n");

let resultGlobal = 0;

console.log(resultGlobal)

function somarGlobal(c, d) {

//Como a variavel foi redeclarada, ela só pode ser acessada dentro do escopo da função 

  let resultGlobal = c + d;
  console.log(resultGlobal);

}

somarGlobal(10, 7);

console.log(resultGlobal);

//Outro teste com funções anônimas

let temp = function(dataTemp) {

	console.log('Está fazendo ' + dataTemp + 'graus hoje.');

};

temp(65);
