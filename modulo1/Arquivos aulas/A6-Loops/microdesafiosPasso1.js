//1) Percorra o array abaixo e exiba seus elementos:

console.log('\nEXERCICIO 1 --------------\n');

const pontos = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90];

for (let i = 0; i < pontos.length; i++) {

  console.log(pontos[i]);

}

//2) Crie um array com valores diversos, percorra-o, altere e mostre seus elementos:

console.log('\nEXERCICIO 2 --------------\n');

let diversos = ['Farnel', 'Farofa', 'Pure', 'Couve', 'Feijão', 'Arroz','Macarrão'];

for (let i = 0; i < diversos.length; i++) {

  primeira = diversos.shift();
  primeira = primeira.toUpperCase();

  console.log(primeira);

  diversos.push(primeira);

}

//3) Crie outro array, percorra-o, altere, salve e exiba seus elementos:

console.log('\nEXERCICIO 3 --------------\n');

const alteraOutroArray = () => {

  let outroArray = ['Macaco', 'Cavalo', 'Cachorro', 'Arara', 'Gato', 'Papagaio'];

  let outrasPalavras = '';

  for (let i = 0; i < outroArray.length; i++) {
  
    outrasPalavras += outroArray[i].toUpperCase() + '\n';
    
  }

  return outrasPalavras
}

console.log(alteraOutroArray());

//4 Crie um último array, percorra-o, selecione os elementos, salve e mostre-os:

console.log('\nEXERCICIO 4 --------------\n');

let ultimoArray = () => {

  let ultimoArray = ['Chimpanzé', 'Dogginho', 'Águia', 'Gato', 'Camelo', 'Girafa'];

  let ultimaPalavra = '';

  for (let i = 0; i < ultimoArray.length; i++) {

    ultimaPalavra += '\n Animal ' + [i+1] + ': ' + ultimoArray[i];

  }

  return ultimaPalavra;
}

console.log(ultimoArray());