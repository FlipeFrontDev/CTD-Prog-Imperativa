/*Praticando funções com closure e callback*/
/*Sim, isso é bem melhor com spread e classes - é só para praticar Closures!*/

const geraCupom = (item, qtde, valorUnit) => {

  //Inicia mensagem do cupom com valores iniciais não calculados

  let cabecalhoCupom =  '\n ------- SUPERMERCADO HOJE -------\n' +
                        item + ' ----------- Valor: ' + valorUnit.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

  const valores =  () => {

    //Inicia função de calculo do valor total

    return cabecalhoCupom + '\n\n' + 'Valor Total: ---------- Valor: ' + (qtde * valorUnit).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  
  }

  //Retorna valor total da compra em closure

  return valores();

}

console.log(geraCupom('Sabão em pó', 3, 3));