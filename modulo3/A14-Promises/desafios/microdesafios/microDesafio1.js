const fs = require('fs');

const leituraFs = file => new Promise((resolve, reject) => {

  fs.readFile(file, (err, contents) => {err ? reject(err) : resolve(JSON.parse(contents));})})

leituraFs('../microdesafios/file.json')
  .then(contents => {console.table(contents);})
  .catch(err => {console.log(err);})