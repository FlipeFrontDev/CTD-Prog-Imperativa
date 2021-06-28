/*Definindo a classe e exportando como módulo*/ 

exports.micro = class microondas {

  /*Definindo atributos estáticos*/

  constructor() {
    
    this.pipoca = 10;
    this.macarrao = 8;
    this.carne = 15;
    this.feijao = 12;
    this.brigadeiro = 8;

    /*Definindo função de ajuste de tempo que retorna estado do prato*/

    this.ajustaTempo = function(opcao, tempo) {

      /*Se tempo escolhido no menu for menor que o tempo padrão, retorna Tempo insuficiente*/

      if (tempo < opcao) {

        return 'Tempo insuficiente';

        /*Se tempo escolhido no menu for maior que o padrão e for até o seu dobro retorna Prato pronto!*/
      
      } else if(tempo >= opcao && tempo <= (opcao*2)) {

        return 'Prato pronto, bom apetite!!!';

        /*Se o tempo escolhido no menu for maior que o dobro e menor que o triplo do padrão, retorna Comida queimou!*/

      } else if (tempo > (opcao *  2) && tempo < (opcao*3)) {

        return 'Comida queimou!';

        /*Se o tempo for 3x maior que o padrão, retorna Kabum*/

      } else {

        return 'Kabum';

      }
    }
  }  
};