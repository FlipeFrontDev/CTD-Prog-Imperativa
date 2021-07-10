//Poderia ser mais simples, mas preciso saber se entendi Modulos. Realmente não havia utilizado anteriormente. Por isso aceito criticas que me façam melhorar.

//Importando módulo microondas

let modulo = require('./microondas');

//Definindo função de menu que define status do prato buscando o método e os atributos no módulo

const menu = (opcao, tempo) => {

  switch (opcao) {

    case 1: return modulo.ajustaTempo(modulo.pipoca, tempo)
    break;

    case 2: return modulo.ajustaTempo(modulo.macarrao, tempo)
    break;
    
    case 3: return modulo.ajustaTempo(modulo.carne, tempo)
    break;
    
    case 4: return modulo.ajustaTempo(modulo.feijao, tempo)
    break;
    
    case 5: return modulo.ajustaTempo(modulo.brigadeiro, tempo)
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