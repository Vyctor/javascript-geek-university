// Instanciação de Objetos - Forma 1
const curso = new Object();
curso.nome = 'Programação em JS';
curso.preco = 27.99;

curso['qtd_alunos'] = 2510;

console.log(curso.nome);

// Instanciação de Objetos - Forma 2

const programa = {
  nome: 'Photoshop',
  preco: 125.00,
  fabricante: {
    nome: 'Adobe',
    contato: 'contact@adobe.com',
    endereco: {
      rua: 'Da paz, 45',
      bairro: 'Nova Lima',
      cidade: 'São Paulo'
    },
    filiais: [{
      cidade: 'Rio de Janeiro'
    }, {
      cidade: 'Recife'
    }]
  },
}

console.log(programa);
console.log(programa['fabricante']['filiais']);


// Instanciação de Objetos - Forma 3

const pessoa = {};
pessoa.nome = 'Vyctor';

console.log(pessoa);

// Instanciação de Objetos - Forma 4

function Lampada(cor) {
  this.cor = cor;
}

const l1 = new Lampada('Branca');

console.log(l1);

// Instanciação de Objetos - Forma 5

const p1 = new pessoa()