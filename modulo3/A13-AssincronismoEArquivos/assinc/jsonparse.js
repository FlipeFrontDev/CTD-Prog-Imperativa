let dadosJson = '{"cidade:": "São Paulo", "bairro": "Morumbi"}';
let dadosConvertidos = JSON.parse(dadosJson);
console.log(dadosConvertidos);

let dadosJS = JSON.stringify(dadosConvertidos);
console.log(dadosJS);