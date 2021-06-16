//Crie uma função construtora chamada Restaurante, que receba como parâmetros o nome do restaurante e o cardápio (que será um array de strings). Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem de boas-vindas, informando o nome do restaurante, e o cardápio.

//Definindo objeto com método construtor

class Restaurante {

  //Definindo método construtor

  constructor(restaurante, cardapio) {

    this.restaurante = restaurante;
    this.cardapio = '';

    //Atribuindo cada item do cardápio à propriedade cardapio do objeto
    for (let i = 0; i < cardapio.length; i++) {

      this.cardapio += cardapio[i] + '\n';

    }

    //Definindo função que exibirá mensagem
    let entrada = () => {

      console.log('\nSEJA BEM VINDO AO ' + this.restaurante + '!' +
        '\n\nCARDÁPIO DO DIA:\n' +
        this.cardapio
      );
    };

    return entrada();

  }
};

//array para ingestão de dados

let cardapio = ['\nENTRADAS:\n', 'Espetinhos de carne','Espetinhos de frango', 'Espetinhos de queijo',
                '\nPRINCIPAL:\n', 'Strogonoff de carne','Strogonoff de frango', 'Strogonoff de queijo',
                '\nSUCOS:\n', 'Suco de laranja','Suco de limão', 'Suco de açaí',
                '\nSOBREMESAS:\n', 'Sorvete de chocolate', 'Sorvete de baunilia',  'Sorvete de maracujá'];

//Instanciação do objeto

let unidade = new Restaurante('RESTAURANTE GUSTEAU\'S', cardapio);