let nomes = ['Felipe', 'Maria', 'João'];


//Metodo LIFO
//remove o ultimo elemento de um array

let oUltimo = nomes.pop( );

console.log(oUltimo);

//insere um ou mais elementos no final de um array

let addUltimo = nomes.push('Michael');

console.log(nomes);


let addUltimos = nomes.push('John', 'Smith');

console.log(nomes);


//Métodos FIFO
//Remove o primeiro elemento de um array

let removePrimeiro = nomes.shift();

console.log(nomes);
console.log(removePrimeiro);

//Insere um ou mais no começo de um array

let inserePrimeiro = nomes.unshift('Carlos');

console.log(nomes);
console.log(inserePrimeiro);

let inserePrimeiros = nomes.unshift('Carla', 'Priscila');

console.log(nomes);
console.log(inserePrimeiros);

//Saber a posição de um elemento

let posicaoElemento = nomes.indexOf('Carla');

console.log(posicaoElemento);

//Saber a última posição  de um elemento repetido

let elementoDuplo = nomes.push('Carla');

let posicaoRepetido = nomes.lastIndexOf('Carla');
console.log(posicaoRepetido);

console.log(nomes.join());

//Pesquisar um elemento em um array

let pesquisaElemento = nomes.includes('Carla');
console.log(pesquisaElemento);
