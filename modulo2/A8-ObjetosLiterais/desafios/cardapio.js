//Crie uma função construtora chamada Restaurante, que receba como parâmetros o nome do restaurante e o cardápio (que será um array de strings). Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem de boas-vindas, informando o nome do restaurante, e o cardápio.

//Definindo classe com método construtor ao invés de função

class Restaurante {

  //Definindo método construtor

  constructor(restaurante, cardapio) {

    this.restaurante = restaurante;
    this.cardapio = cardapio.join('\n');
    this.entrada = () => {return '\nSEJA BEM VINDO AO ' + this.restaurante + '!' + '\n\nCARDÁPIO DO DIA:\n' + this.cardapio;};
  
  }
};

//array para ingestão de dados

let cardapio = ['\nENTRADAS:\n', 'Espetinhos de carne','Espetinhos de frango', 'Espetinhos de queijo',
                '\nPRINCIPAL:\n', 'Strogonoff de carne','Strogonoff de frango', 'Strogonoff de queijo',
                '\nSUCOS:\n', 'Suco de laranja','Suco de limão', 'Suco de açaí',
                '\nSOBREMESAS:\n', 'Sorvete de chocolate', 'Sorvete de baunilia',  'Sorvete de maracujá'];

//Instanciação do objeto

let unidade = new Restaurante('RESTAURANTE GUSTEAU\'S', cardapio);
console.log(unidade.entrada());