/*
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/

//Importando módulo do objeto microondas

const modulo = require('./microondas');

//Definindo função de menu que define status do prato buscando o método e os atributos no módulo

const menu = (opcao, tempo) => {

  switch (opcao) {

    case 1: return modulo.microondas.ajustaTempo(modulo.microondas.pipoca, tempo)
    break;

    case 2: return modulo.microondas.ajustaTempo(modulo.microondas.macarrao, tempo)
    break;
    
    case 3: return modulo.microondas.ajustaTempo(modulo.microondas.carne, tempo)
    break;
    
    case 4: return modulo.microondas.ajustaTempo(modulo.microondas.feijao, tempo)
    break;
    
    case 5: return modulo.microondas.ajustaTempo(modulo.microondas.brigadeiro, tempo)
    break;

    //Mensagem padrão caso nenhuma das opções válidas seja selecionada

    default: return 'Prato inexistente!';
  }
}

//Testes de resultados possíveis

console.log('\n-------- TESTES ---------\n');

/*Prato pronto*/

console.log('\nPrato pronto!\n');

console.log(menu(1, 10));
console.log(menu(2, 8));
console.log(menu(3, 15));
console.log(menu(4, 12));
console.log(menu(5, 8));

/*Comida queimou*/

console.log('\nComida queimou!\n');

console.log(menu(1, 21));
console.log(menu(2, 17));
console.log(menu(3, 31));
console.log(menu(4, 25));
console.log(menu(5, 17));

/*Kabum*/

console.log('\nKabum!\n');

console.log(menu(1, 30));
console.log(menu(2, 24));
console.log(menu(3, 45));
console.log(menu(4, 36));
console.log(menu(5, 24));

/*Tempo insuficiente*/

console.log('\nTempo insuficiente!\n');

console.log(menu(1, 9));
console.log(menu(2, 7));
console.log(menu(3, 14));
console.log(menu(4, 11));
console.log(menu(5, 7));

/*Opção inválida*/

console.log('\nPrato inexistente!\n');

console.log(menu(6, 9));
console.log(menu(7, 7));
console.log(menu(8, 14));
console.log(menu(9, 11));
console.log(menu(10, 7));