//EXERCICIO INTEGRADOR

//1 Calcular o lucro total de todos os produtos;

console.log('\n1 ------------\n');

let controle = [
  {nome: 'arroz', preco: 20.00, qtde_vendida: 5},
  {nome: 'feijao', preco: 5.00, qtde_vendida: 10},
  {nome: 'cafe', preco: 10.00, qtde_vendida: 10},
  {nome: 'laranja', preco: 4.00, qtde_vendida: 20}
];

const lucroBruto = (objeto) => objeto.reduce((acc, atual) => {return (acc + (atual.preco * atual.qtde_vendida))}, 0);
console.log(lucroBruto(controle).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}));

/*2*/

console.log('\n2 ------------\n');

const consulta = (objeto, nome, preco) =>
                                          {objeto.find(item => {return item.nome === nome ?
                                          console.log(`PRODUTO: ${item.nome.toUpperCase()}\nLUCRO: ${preco * item.qtde_vendida}`) : null})};

console.log(consulta(controle, 'arroz', controle[0].preco));

/*3*/

console.log('\n3 ------------\n');

const vendaMaior = (objeto, valor) => objeto.filter(item => {return (item.preco*item.qtde_vendida) > valor});
console.table(vendaMaior(controle, 40));

/*4*/

console.log('\n4 ------------\n');

const lucros = controle.map(item => ({nome: item.nome.toUpperCase(), subtotais: item.preco * item.qtde_vendida}));
console.table(lucros.sort((item1, item2) => (item1.subtotais > item2.subtotais) ? 1 : (item1.subtotais < item2.subtotais) ? -1: 0));

/*5*/
console.log('\n5 ------------\n');
console.log(consulta(controle, 'arroz', 100));

/*6*/
console.log('\n6 ------------\n');

const lucroLiquido = (funcao, desc) => {return 'LUCRO LIQUIDO: ' + (funcao(controle) * (1-(desc/100))).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})};
console.log(lucroLiquido(lucroBruto, 45));