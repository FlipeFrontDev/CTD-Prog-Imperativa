function somar(z,y,x) {
    //declarativa
    console.log('x=',x);
    console.log('y=',y);
    console.log('z=',z);
    return x+y+z;
}

let numeros=[999,2,33];

console.log('Total:',somar(...numeros));