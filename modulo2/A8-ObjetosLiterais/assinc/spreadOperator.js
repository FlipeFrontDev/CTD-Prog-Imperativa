/*O Spread Operator expande conteúdos de arrays em locais onde múltiplos elementos são esperados
Basicamente, o spread operator irá retornar todos os valores do array, ao invés de toda a estrutura do array em si.
Com isso, é possível realizar cópias de arrays, concatenações, passar valores para funções, e até transformar Strings em Arrays.*/

/*Spread Operator - resumo: unificar arrays*/
/*Para espalhar e copiar dados*/

let frutasUm = ['banana', 'pera', 'maçã'];
let frutasDois = ['maracujá', 'limão', 'abacaxi'];

let listaCompleta = [frutasUm, frutasDois];

let todasFrutas = [...frutasUm, ...frutasDois];

console.log(listaCompleta);

console.log('\n------ Usando Spread em listas ------\n');

console.log(todasFrutas);

let pessoa = {

  nome: 'Felipe',
  idade: 30
}

let info = {

  tel: 12988397209,
  rg: 471741218
}

let dadosPessoais = {

  ...pessoa,
  endereco: 'Rua oito',
  ...info
};

console.log(dadosPessoais);

console.log('\nOutro exemplo\n');

//Usando Herança de objetos
//Mesma ideia de abstrair dados em modelagem

let aluno = {

  contrato: 'CTD',
  cargaHoraria: '8 horas',
  nível: 'Iniciante'
}

let especializacao = {

  area: 'Back-end',
  linguagem: 'Java',
  linguagemFront: 'React',
  tecnologiaAdicional: 'Azure/ GCP/ AWS'
}

let matricula = {
  idMatricula: 55227978,
  ...pessoa,
  ...aluno,
  ...especializacao
}

console.log(matricula)

//Parametro Rest (gera argumentos infinitos)

function retorna (...param) {

  console.log(param);

}

retorna('aula', 'bis', 'colega');

