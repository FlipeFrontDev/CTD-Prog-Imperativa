let lista = ['Arroz', 'Feijão', 'Macarrão', 'Leite'];

let unirLista  = lista.join();
console.log('\njoin\n');
console.log(unirLista);
console.log('\nEste método une elementos de um array e transforma em uma única string');

let removerUltimo = lista.pop();
console.log('\npop\n');
console.log(removerUltimo);
console.log(lista);
console.log('\nEste método remove o último elemento de um array');

let inserirUltimo = lista.push('Marcarrão');
console.log('\npush\n');
console.log(lista);
console.log('\nEste método insere um elemento na última posição do array');

let inserirUltimos = lista.push('Doces', 'Shampoo');
console.log('\npush\n');
console.log(lista);
console.log('\nEste método também insere um ou mais elementos na última posição do array');

let removerPrimeiro = lista.shift();
console.log('\nshift\n');
console.log(removerPrimeiro);
console.log(lista);
console.log('Este método remove o primeiro elemento de uma lista');

let inserirPrimeiros = lista.unshift('Carvão', 'Balas');
console.log('\nunshift\n');
console.log(lista);
console.log('Este método insere um ou mais elementos nas primeiras posições de um array');