const saudacao = (nome) => {

  let saudacaoInicial = 'Olá seja bem vindo ';

  function saudado() {

    return saudacaoInicial + nome + '!'; 

  };

  return saudado();

};

console.log(saudacao('Fabricio'));