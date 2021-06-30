//Desestruturação: Simplifica extração de dados dos objetos literais e arrays;
//Não modifica objeto de origem, só copia!

//objetos
//Usar termos sinonimos na desestruturação

let pessoa = {
  nome: "Felipe",
  altura: 1.80
}

const {nome, altura} = pessoa;

console.log(nome + ' ' + altura);

//Arrays
//Possível usar termos análogos

let alimentos = ['Arroz', 'Feijão'];

const [item1, item2] = alimentos;

console.log('Hoje tem ' + item1 + ' e ' + item2 + ' no almoço!');