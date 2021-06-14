//1)Criar uma função para verificar se um número é par ou ímpar. Um número é par quando na divisão por 2 o resto é 0

let nota1;
let nota2;
let media = (nota1 + nota2) / 2;

let aprovacao = () => media >= 6 ? 'Aprovado!' : 'Reprovado!';

console.log(aprovacao());