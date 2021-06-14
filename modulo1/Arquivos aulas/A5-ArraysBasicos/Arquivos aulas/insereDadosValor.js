//Funções arrow expression
//loop
//Ideia - criar função que simulo entrada de dados em array
//Futuramente: Entrada de chave: valor em dicionarios para cadastro em APIs

//Analogia - usar dados do exercicio lista de compras - FrontEnd 1 para inserir e retornar dados

//Métodos:
//usar = .push(), pop(), indexOf(), include() e demais métodos
//Dividir métodos LIFO e FIFO

//incluir tryParse javascript - ver favoritos da disciplina
  
let subTotal = 0;

const insereDados = () => {

  let qtde = prompt('Quantos produtos deseja inserir?');

  qtde = parseInt(qtde);

  //Inicializando Matriz:

  var linhas = qtde;

  var colunas = 2;

  //Inicia o array maior

  //Ver porque está dando erro em 3 produtos
  var lista = new Array(linhas);
  console.log(lista);

  //Inicia os arrays de linhas

  for (let i = 0; i < linhas; i++) {

    lista[i] = new Array(colunas);

  }

  console.log(lista);
 /*  console.log(lista[0][0]);
  console.log(lista[0][1]);
  console.log(lista[1][0]);
  console.log(lista[1][1]);
  console.log(lista[2][0]);
  console.log(lista[2][1]); */

  for(var i = 0; i < qtde; i++) {

    produto = prompt('Digite o nome do ' + [i+1] + 'º produto');
    lista[i][0] = produto;

    valor = prompt('Digite o valor do ' + [i+1] + 'º produto');
    subTotal += lista[i][1] = parseFloat(valor);

      console.log(lista);
      console.log(lista[0][0]);
      console.log(lista[0][1]);

    }
    return lista;
}

const consultaUsuario = (resposta) => {

  switch (resposta) {

    case 'Sim': console.log(relatorio(insereDados()));
    break;

    case 'Não': close();
    break;

    default: 'Por favor, digite Sim ou não!';
    break;

  }
}

const removeUltimoDado = () => {

  lista.pop();

  return lista;

};

const removePrimeiroDado = () => {

  lista.shift();

  return lista;

};

const insereDadoInicio = (dado) => {

  lista.unshift(dado);

  return lista;

};

const relatorio = (listaPronta) => {

  let relatorio = '----------- LISTA DE COMPRAS -----------\n\n' +
                  '----------- Relação de items -----------\n';
                  

  for (i = 0; i < listaPronta.length; i++) {

    relatorio += '\nPoduto: ' + listaPronta[i][0] +
                  ' ------- ' +
                  ' Valor: ' + (listaPronta[i][1]).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' }) + 
                  '\n';

  }

  relatorio += '\nSubtotal = ' + subTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' }) + '\n\n Deseja repetir o processo?';

  return prompt(relatorio);

};

console.log(relatorio(insereDados()));
console.log(consultaUsuario(relatorio()));



/* --- Testes no terminal ---
console.log(insereDados('Feijão'));
console.log(insereDados('Arroz'));
console.log(insereDados('Feijão'));
console.log(insereDados('Extrato de tomate'));
console.log(insereDados('Detergente'));

console.log(removeUltimoDado());

console.log(removePrimeiroDado());

console.log(insereDadoInicio('Amaciante - 1L'));
console.log(insereDadoInicio('Cloro - 1L'));

console.log(relatorio());*/