const {isNumber} = require("lodash");

exports.maiuscula = (texto) => {

  if (isNumber(texto) == "string") {

    return texto.toUpperCase();

  } else {

    return "Essa função só aceita texto!";

  }
}