const fs = require('fs');

let file1 = new Promise((resolve, reject) => {
  
  return fs.readFile('../microdesafios/file.json', (err, data1) => {

    err ? reject(err) : resolve(JSON.parse(data1));})});

let file2 = new Promise((resolve, reject) => {
  
  return fs.readFile('../microdesafios/file2.json', (err, data2) => {

    err ? reject(err) : resolve(JSON.parse(data2));})});

let file3 = new Promise((resolve, reject) => {
  
  return fs.readFile('../microdesafios/file3.json', (err, data3) => {

    err ? reject(err) : resolve(JSON.parse(data3));})});

Promise.all([file1, file2, file3])
  .then(data => {console.log(data);})
  .catch(err => {console.log(err);})