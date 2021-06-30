const saudacaoPersonalizada = (nome) => {

  let saudacaoGenerica = 'Olá';

  function saudar() {

    /*Retorna elementos fora da função, pois tem acesso de escopo*/
    return saudacaoGenerica + ' ' + nome;

  }

  /*Função conteiner retorna resultado da função filha*/
  return saudar();

}

console.log(saudacaoPersonalizada('Felipe'));