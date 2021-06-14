//Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).

//1)Criar uma função para verificar se um número é par ou ímpar. Um número é par quando na divisão por 2 o resto é 0.

let getNumber = () => {

  let number = prompt('Digite um número?');

  return number;

};

const verificaNumero = () => {
  
  let numEntry = getNumber();

  return numEntry % 2 == 0 ? alert('Número par!') : alert('Número impar!');

};

verificaNumero();