exports.mais=(a,b)=>a+b;

exports.menos=(a,b)=>a-b;

exports.maiuscula=texto=> {

  if (texto == 'string') {

    texto.toUpperCase();

  } else {

    console.log('Digite apenas textos!');

  }
}

/* module.exports=mais;
module.exports=menos;
module.exports=maiuscula; */