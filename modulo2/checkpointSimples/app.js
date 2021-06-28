let verifica = function(opcao,tempo) {

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
};

//Função que retorna estado do prato para o console chamando função verifica

let menu = function(opcao, tempo) {

  const pipoca = 10, macarrao = 8, carne = 15, feijao = 12, brigadeiro = 8;

  switch (opcao) {

    case 1: return verifica(pipoca, tempo);
    break;
    
    case 2: return verifica(macarrao, tempo);
    break;
  
    case 3: return verifica(carne, tempo);
    break;

    case 4: return verifica(feijao, tempo);
    break;
    
    case 5: return verifica(brigadeiro, tempo);
    break;

    default: return 'Prato inexistente!';
  }
}

//Testes de resultados possíveis

console.log('\n-------- TESTES---------\n');

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