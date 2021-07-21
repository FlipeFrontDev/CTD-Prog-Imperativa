/*
1 - Crie uma variável produtos, que contenha um array de objetos, com no
mínimo 3 itens. Dentro da variável, liste produtos disponíveis, informando os
seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do
Produto e Status.
A informação Qualidade do Produto deve ser um número que irá de 0 a 10.
A informação Status deve ser um Booleano, indicando se o produto está
disponível em estoque.
*/

const produtos = [
  {nomeProduto: 'bola', valorProduto: 500, qualidadeProduto: 8, status: true},
  {nomeProduto: 'carro', valorProduto: 600, qualidadeProduto: 5, status: true},
  {nomeProduto: 'boneca', valorProduto: 400, qualidadeProduto: 7, status: false},
]

/*
2 - Em seguida, um usuário deseja filtrar os produtos, com base em alguns
critérios. Selecione todos os produtos que tenham:
Valor entre 482 e 1600;
Qualidade superior a 60;

Status como disponível.
O resultado do filtro deve ser armazenado na variável carrinho.
*/

const carrinho = (objeto) => objeto.filter (item => {return item.valorProduto >= 482 && item.valorProduto <= 1600 && item.qualidadeProduto > 6 && item.status == true});
console.log(carrinho(produtos));

/*
3 - Por fim, é necessário exibir todos os itens presentes no carrinho, com seus
nomes e preços correspondentes, e no final um valor total, resultante da
somatória de todos os produtos.
*/

const caixa = produtos.reduce((acc, el) => {console.log(`NOME: ${el.nomeProduto} - PRECO: ${el.valorProduto}`);
                                            return acc + el.valorProduto}, 0);
console.log(caixa);