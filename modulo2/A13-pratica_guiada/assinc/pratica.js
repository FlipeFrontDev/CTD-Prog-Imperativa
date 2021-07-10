/*1*/

const produtos = [
  {nomeProduto: 'bola', valorProduto: 500, qualidadeProduto: 8, status: true},
  {nomeProduto: 'carro', valorProduto: 600, qualidadeProduto: 5, status: true},
  {nomeProduto: 'boneca', valorProduto: 400, qualidadeProduto: 7, status: false},
]

/*2*/

const carrinho = (objeto) => objeto.filter (item => {return item.valorProduto >= 482 && item.valorProduto <= 1600 && item.qualidadeProduto > 6 && item.status == true});
console.log(carrinho(produtos));