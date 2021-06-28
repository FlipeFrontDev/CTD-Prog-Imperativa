//Este projeto poderia ter sido mais simples, mas preciso validar conceitos de POO e módulos por isso estou me arriscando e aceitando criticas que me façam melhorar, pois meu objetivo é aprender. Espero que comentários ajudem. Estou à disposição.

//Importando módulo do objeto microondas.

const modulo = require('./microondas');

//Definindo função de menu que retorna status do prato buscando o método e os atributos no módulo

const menu = (opcao, tempo) => {

  //Instancia objeto microondas, importado como modulo

  let calc = new modulo.micro();

  //Switch, retorna uma função do objeto calc, de acordo com a opção

  switch (opcao) {

    case 1: return calc.ajustaTempo(calc.pipoca, tempo)
    break;

    case 2: return calc.ajustaTempo(calc.macarrao, tempo)
    break;
    
    case 3: return calc.ajustaTempo(calc.carne, tempo)
    break;
    
    case 4: return calc.ajustaTempo(calc.feijao, tempo)
    break;
    
    case 5: return calc.ajustaTempo(calc.brigadeiro, tempo)
    break;

    //Mensagem padrão caso nenhuma das opções válidas seja selecionada

    default: return 'Prato inexistente!';
  }
}

//Testes de resultados possíveis


console.log('\n-------- TESTES ---------\n');

/*Prato pronto*/

console.log('\nPRATO PRONTO!\n');

console.log(menu(1, 10));
console.log(menu(2, 8));
console.log(menu(3, 15));
console.log(menu(4, 12));
console.log(menu(5, 8));

/*Comida queimou*/

console.log('\nCOMIDA QUEIMOU!\n');

console.log(menu(1, 21));
console.log(menu(2, 17));
console.log(menu(3, 31));
console.log(menu(4, 25));
console.log(menu(5, 17));

/*Kabum*/

console.log('\nKABUM!\n');

console.log(menu(1, 30));
console.log(menu(2, 24));
console.log(menu(3, 45));
console.log(menu(4, 36));
console.log(menu(5, 24));

/*Tempo insuficiente*/

console.log('\nTEMPO INSUFICIENTE!\n');

console.log(menu(1, 9));
console.log(menu(2, 7));
console.log(menu(3, 14));
console.log(menu(4, 11));
console.log(menu(5, 7));

/*Opção inválida*/

console.log('\nPRATO INEXISTENTE!\n');

console.log(menu(6, 9));
console.log(menu(7, 7));
console.log(menu(8, 14));
console.log(menu(9, 11));
console.log(menu(10, 7));