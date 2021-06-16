function print(mensagem){
    console.log(mensagem)
  }

  const printArrow = (msg) => {

    console.log(msg);

  }

  print('Olá, bom dia!');
  printArrow('Tudo bem com você?');

  function soma(n1, n2){
    return n1 + n2
  }

  const somaArrow = (num1, num2) => {

    return num1 + num2;

  }

  console.log(soma(10, 10))
  console.log(somaArrow(15, 15))