let dia = 'Quarta';

let hora = ' ';

function diaSemana(data) {

  if (data == 'Quarta') {

    console.log('Olá hoje é ' + data);
  
  } else if (data = 'Quinta') {
  
    console.log('Opa! Hoje é feriado!');
  
  }
}

diaSemana(dia);

dia = 'Quinta';

diaSemana(dia);

let diaSemana2 = function(data) {

  if (data == 'Quarta') {

    console.log('\nOlá hoje é ' + data);
  
  } else if (data = 'Quinta') {
  
    console.log('\nOpa! Hoje é feriado!');
  
  }
}

diaSemana2(dia);
console.log(typeof diaSemana2);