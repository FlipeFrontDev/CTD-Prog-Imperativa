function escreverSexo(sexo) {

  if (sexo == 'f') {

    return 'Feminino';

  } else if (sexo == 'm') {

    return 'Masculino';

  } else if (sexo != 'f' && sexo != 'm') {

    return 'outros';

  } else if (sexo != 'f' && 'm') { //Converte 'm' para true

    return 'convertendo m para true'

  } else if (sexo != 'f' && sexo != 'm') { //Converte 'm' para true

    return 'convertendo m para true';

  }
}

console.log(escreverSexo('x'));