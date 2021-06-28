/*Praticando POO*/

//Definindo objeto genérico

let funcionario = {

  id_funcionario: 5999428480,
  nome: 'João',
  sobrenome: 'Guttemberg',
  cpf: 44455566677,
  telefone: 11999991111,
  endereco: 'Av. Paulista, 330'
};

//Definindo abstração

let descritivoCargo = {

  ...funcionario,
  cargo: 'Padeiro',
  horasSemanais: 44,
  valorHora: 50,
  salarioBruto: function() {return (this.horasSemanais * this.valorHora).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
}

//Definindo classe

class folhaPagamento {


  //Método construtor recebe os 2 objetos criados anteriormente como argumento

  constructor(colaborador, descritivo) {

    this.colaborador = colaborador;
    this.descritivo = descritivo;


    //método para calculo da folha de pagamento

    this.calcula = () =>

      {

        return '----- EMPRESA ASSOCIADOS ------' +
                        '\n\nId funcionário: ' + this.colaborador.id_funcionario +
                        '\nNome completo: ' + this.colaborador.nome + ' ' + this.colaborador.sobrenome +
                        '\nSalário Bruto: ' + this.descritivo.salarioBruto();
      }
  }
}

//Instanciação do objeto Folha de pagamento

const fechamento = new folhaPagamento(funcionario, descritivoCargo);

//Impressão no console de objeto especifico

console.log(fechamento.calcula());