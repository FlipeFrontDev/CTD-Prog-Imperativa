//5)As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Criar uma função que através do parâmetro quantidade calcule e imprima o custo total da compra.

function calculaCompra(qtde) {

  //Condicional que garante entrada de dados positivos para o parametro qtde

  if (qtde > 0 && qtde < 12) {

    return 'CUSTO TOTAL DA COMPRA = ' + (qtde * 1.30).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

  } else if (qtde > 0 && qtde >= 12) {

    return 'CUSTO TOTAL DA COMPRA = ' + (qtde * 1.00).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

  } else {

    return 'DIGITE UM VALOR POSITIVO!';

  }
}

console.log(calculaCompra(10));