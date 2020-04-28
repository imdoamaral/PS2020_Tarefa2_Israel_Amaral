//classes

class Pessoa {
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Garcom extends Pessoa {
    constructor(nome, idade){
        super(nome, idade);
    }
    checarIDs(Pessoa){
        if (Pessoa.idade<18)
        return console.log(Pessoa.nome+' vai tomar Coca-Cola.');

        else
        return console.log(Pessoa.nome+' pode tomar cerveja!');

    }
}

class Estudante extends Pessoa {
    constructor (nome, idade, irmaos, universidade, curso, republica){
        super(nome, idade);
        this.irmaos = [];
        this.universidade = universidade;
        this.curso = curso;
        this.republica = republica;
    }
    addIrmao (irmaoNovo){
        return this.irmaos.push(irmaoNovo);
    }
    pedirConta (pedido){
        console.log('O total da conta foi de '
        +pedido.calcularTotal()
        .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        +' sendo '+pedido.calcularIndividual()
        .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        +' para cada.');
    }
}

class Curso {
    constructor (nome, quantPeriodos, cargaHoraria){
        this.nome = nome;
        this.quantPeriodos = quantPeriodos;
        this.cargaHoraria = cargaHoraria;
    }
}

class Universidade {
    constructor (nome, curso){
        this.nome = nome;
        this.cursos = curso;
    }
}

class Republica {
    constructor (nome, idade, quantMoradores){
        this.nome = nome;
        this.idade = idade;
        this.quantMoradores = quantMoradores;
    }
}

class Pedido {
    constructor (item, quantItem, quantPessoas){
        this.item = item;
        this.quantItem = quantItem;
        this.quantPessoas = quantPessoas;
    }

    calcularTotal(){
        return this.item.preco*this.quantItem;
        
    }

    calcularIndividual (){
        return (this.item.preco*this.quantItem)/this.quantPessoas;
        
    }
}

class Bebida {
    constructor (nome, preco, alcool){
        this.nome = nome;
        this.preco = preco;
        this.alcool = alcool;     
    }
}

//main
var curso1 = new Curso('EC', 10, 3630);

var univ1 = new Universidade('UFOP', [curso1]);

var rep1 = new Republica('Orfanato', 10, 5);

var pessoa1 = new Estudante('Pedro',   20, null, univ1, curso1, rep1);
var pessoa2 = new Estudante('Ana',     17, null, univ1, curso1, rep1);
var pessoa3 = new Estudante('Paulo',   23);
var pessoa4 = new Estudante('Armando', 17);
var pessoa5 = new Garcom   ('Andre',   null);

pessoa1.addIrmao(pessoa2);
pessoa2.addIrmao(pessoa1);

//console.log(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5);    

var bebida1 = new Bebida('cerveja', 7, true);

var pedido1 = new Pedido(bebida1, 2, 4);

console.log(pessoa5.checarIDs(pessoa2),
            pessoa5.checarIDs(pessoa4));

pedido1.calcularTotal();
pedido1.calcularIndividual();

console.log('A conta deu '+pedido1.calcularTotal()
        .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        +' galerinha.');

console.log('A conta deu '+pedido1.calcularIndividual()
        .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        +' para cada um.');

pessoa1.pedirConta(pedido1); 