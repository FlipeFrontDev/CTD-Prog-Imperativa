/*1*/

let objetoJs = {int: 9, string: 'texto', object: {nome: 'fulano', sobrenome: 'siclano'}, array: ['item1', 'item2', 'item3', 'item4']};

let objetoJson = JSON.stringify(objetoJs);

console.log(objetoJson);

/*2*/

let stringJs = JSON.parse(objetoJson);

console.log(`\nOBJETO RECONVERTIDO PARA JS:\n ${stringJs}`);
console.log('\nELEMENTO 1:\n' + stringJs.int);
console.log('\nELEMENTO 2:\n' + stringJs.string);
console.log('\nELEMENTO 3:\n' + stringJs.object);
console.log('\nELEMENTO 4:\n' + stringJs.array);

/*Alterar Atributo/elem.*/

stringJs["string"] = "Felipe";
console.log(stringJs);

/*Excluir Atributo/elem*/

delete stringJs.int;
console.log(stringJs);

/*ADD Atributo/elem*/

stringJs["float"] = 10.50;
console.log(stringJs);