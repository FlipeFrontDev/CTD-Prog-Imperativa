//Funções arrow expression
//loop
//Ideia - criar função que simulo entrada de dados em array
//Futuramente: Entrada de chave: valor em dicionarios para cadastro em APIs

//Analogia - usar dados do MEU exercicio lista de compras - FrontEnd 1 para inserir e retornar dados

//Métodos:
//usar = .push(), pop(), indexOf(), include() e demais métodos
//Dividir métodos LIFO e FIFO

let lista = [];

const insereDados = () => {

  let qtde = prompt('Quantos produtos deseja inserir?');

  qtde = parseInt(qtde, 10);

  //console.log(typeof(qtde));

  let produto;

  for(let i = 0; i < qtde; i++) {

    produto = prompt('Digite o nome do produto');
    lista.push(String(produto));
    console.log(lista);
    /*console.log(lista + '\n');*/

  }
    return lista;
}


const removeUltimoDado = () => {

  lista.pop();

  return lista;

};

const removePrimeiroDado = () => {

  lista.shift();

  return lista

};

const insereDadoInicio = (dado) => {

  lista.unshift(dado);

  return lista;

};

const relatorio = (listaPronta) => {

  let relatorio = '----------- LISTA DE COMPRAS -----------\n\n' +
                  '----------- Relação de items -----------\n';
                  

  for (i = 0; i < listaPronta.length; i++) {

   relatorio += '\n' + listaPronta[i]; //(' -'*((lista[i].length) - 38)) calcular qtde de --- para colocar no cupom fiscal; 

  }

  return relatorio;
};


console.log(relatorio(insereDados()));


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