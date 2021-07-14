# Readme

### Promises

**Objetivos**

Nessa prática veremos um pouco melhor como as Promises vêm para resolver os problemas, ou o visual, das funções callbacks. Vamos lembrar de usar o que vimos até agora para fazer nosso código.Arquivos JSON que serão utilizados nestas atividades: [file.json](https://drive.google.com/file/d/1_gxlhBchoQUEYbbMUo7LwAi2ta_J-Z0N/view?usp=sharing), [file2.json](https://drive.google.com/file/d/1ru5zWWc0LK15B6BKBTxNHaVK735iCFtZ/view?usp=sharing) e [file3.json](https://drive.google.com/file/d/1CuahdfvXcm1zTMRbC7mFfh01i3f6-6Yy/view?usp=sharing)



#### Micro Desafio 1

Dado o seguinte código de leitura de arquivos com FileSystem, necessitamos modificá-lo para a sintaxe de Promises, de modo que possamos ver os arquivos corretamente através do console.



![](https://i.imgur.com/4SwF7eR.png)



#### Micro Desafio 2

Agora temos um código com callbacks aninhados e precisamos executá-los todos ao mesmo tempo — com as funções de callbacks não poderíamos fazer isso —. Precisamos usar o método [Promise.all()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) para poder transcrever nossos callbacks aninhados em Promises e obter por console os 3 arquivos lidos e impressos por eles.



![](https://i.imgur.com/cSqEu8r.png)



#### Micro Desafio 3

Em um arquivo, cole o código abaixo. Em seguida, exporte a função *promessa* e importe-a em um arquivo diferente. Por fim, precisamos ler o arquivo file.json após os segundos especificados na função.



![](https://i.imgur.com/McR7azk.png)