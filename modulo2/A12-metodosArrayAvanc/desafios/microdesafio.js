/*Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().*/

const numeros = [1,2,3,4,5,6,7,8,9,19];
console.table(numeros.map(num => num / numeros.reduce((total, el) => total + el)));

/*Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())*/

const palavras = ['Carro', 'Faca', 'Caminhão', 'Bola', 'Macarrão', 'Arroz'];
const palavraFilter = (array, num) => {return array.filter(el => {return el.length > num;})}
console.table(palavraFilter(palavras, 4));

/*Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. */

  const alunos = [  {nome: 'Felipe', nota: 10},
                    {nome: 'Bruno', nota: 9},
                    {nome: 'Marcela', nota: 10},
                    {nome: 'Fernando', nota: 5},
                    {nome: 'Matha', nota: 8},
                    {nome: 'Beatriz', nota: 4},
                    {nome: 'Alberto', nota: 3},
                    {nome: 'Julia', nota: 7}];


console.table(alunos.sort((a1, a2) => (a1.nome > a2.nome) ? 1 : (a1.nome < a2.nome) ? -1: 0));
console.table(alunos.sort((a1, a2) => (a1.nota < a2.nota) ? 1 : (a1.nota > a2.nota) ? -1: 0));