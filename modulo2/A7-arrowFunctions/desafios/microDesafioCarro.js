/*Funções filhas são criadas*/

const parar = () => 'O carro parou!';
const andar = () => 'O carro está andando!';

/*Função pai, recebe função callback como parametro*/

const acaoCarro = (acao) => {

  /*Função pai executa e retorna resultado da função filha*/
  return acao();

}

/*Resultado da função filha é registrado no console*/

console.log(acaoCarro(andar));
console.log(acaoCarro(parar));