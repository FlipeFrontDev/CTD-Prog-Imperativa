let dia = 'Terca';

let hora = ' ';

//if Ternario

console.log(dia == 'Quarta' ? 'Hoje é Quarta man' : 'Hoje é feriado! man');

function diaSemana(data) {

  switch (data) {

    case "Terca":
    case "Quarta":
  
      console.log('Hoje é Quarta!');
  
      break;
  
    case "Quinta":
  
      console.log('Opa! Hoje é feriado!');
  
      break;
    
    default:

      console.log('Nenhum dia selecionado!');
      
      break;

  }
}

diaSemana(dia);