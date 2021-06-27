const fizzBuzz = (num1, num2) => {

  const compara = () => {

    for (let i = 1; i <= 100; i++) {

      if (i % num1 == 0 && i % num2 == 0) {
   
       console.log('FizzBuzz');
   
      } else if (i % num1 == 0) {
   
       console.log('Fizz');
   
      } else if (i % num2 == 0) {
   
       console.log('Buzz');
   
      } else {
   
       console.log(i);
   
      }
     }
  }

  return compara();
}

fizzBuzz(2, 3);