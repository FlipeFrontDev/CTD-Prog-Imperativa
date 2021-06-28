/*Definindo módulo microondas com atributos fixos e método*/

let microondas = {

  pipoca: 10,
  macarrao: 8,
  carne: 15,
  feijao: 12,
  brigadeiro: 8,

  /*Método que verifica ajuste de tempo e retorna estado do prato*/

  ajustaTempo: function(opcao,tempo) {

    /*Se tempo escolhido no menu for menor que o tempo padrão, retorna Tempo insuficiente*/

    if (tempo < opcao) {

      return 'Tempo insuficiente';
      
    /*Se tempo escolhido no menu for maior que o padrão e for até o seu dobro, retorna Prato pronto!*/
    
    } else if(tempo >= opcao && tempo <= (opcao *  2)) {

      return 'Prato pronto, bom apetite!!!';

    /*Se o tempo escolhido no menu for maior que o dobro e menor que o triplo do padrão, retorna Comida queimou!*/

    } else if (tempo > (opcao *  2) && tempo < (opcao *  3)) {

      return 'Comida queimou!';

    } else {

      /*Se o tempo for 3x maior que o padrão, retorna Kabum*/

      return 'Kabum';

    }
  },
};

/*Exportando módulo*/

module.exports = microondas;