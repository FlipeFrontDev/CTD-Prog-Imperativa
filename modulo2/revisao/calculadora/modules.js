exports.calc = class Calculadora {

      constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
        this.somar = function() {return this.num1 + this.num2;};
        this.subtrair = function() {return this.num1 - this.num2;};
        this.multiplicar = function() {return this.num1 * this.num2;};
        this.dividir = function() {return this.num1 / this.num2;};
      }
    }
/* 
let calcular = new calc(2,2);
console.log(calcular.somar());
console.log(calcular.subtrair());
console.log(calcular.multiplicar());
console.log(calcular.dividir()); */