exports.microondas = {

  pipoca: 10,
  macarrao: 8,
  carne: 15,
  feijao: 12,
  brigadeiro: 8,

  ajustaTempo: function(opcao,tempo) {

    if (tempo < opcao) {

      return 'Tempo insuficiente';
    
    } else if(tempo >= opcao && tempo <= (opcao *  2)) {

      return 'Prato pronto, bom apetite!!!';

    } else if (tempo > (opcao *  2) && tempo < (opcao *  3)) {

      return 'Comida queimou!';

    } else {

      return 'Kabum';

    }
  },
};