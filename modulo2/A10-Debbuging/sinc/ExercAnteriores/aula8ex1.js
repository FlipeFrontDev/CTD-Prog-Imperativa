//objeto
let pessoa={
    //características do objeto - atributos
    //chave:valor
    //propriedades
    nome: 'Silvia',
    sexo: 'x', 
    usaAlianca: true,
    idade: 57,
    filhos: 3,
    //métodos
    exibir: function() {
        let sexo;
        switch (this.sexo)
        {
            case 'f': sexo='Mulher';
            break;
            case 'm': sexo='Homem';
            break;
            default : sexo='Inválido';
        }
       // let sexo=this.sexo=='f' ? 'mulher' : 'homem';
        return 'Características do objeto:'+this.nome.toUpperCase()+'\nSexo: '+sexo+'\nIdade:'+this.idade;
    }};

    // console.log('Nome:',pessoa.nome);
    // console.log(pessoa);
   
    console.log(pessoa.exibir());