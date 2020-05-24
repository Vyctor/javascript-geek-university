// Criando objeto através de uma factory function

const pessoa = (nome, sobrenome) => {
  return {
    andar: () => console.log(`${nome} ${sobrenome} está andando...`)
  }
}

const p1 = pessoa('Felicity', 'Jones');

p1.andar();

// Criando objeto através de uma função construtora

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.andar = () => {
    console.log(`${this.nome} ${this.sobrenome} está andando`);
  }
}

const p2 = new Pessoa2('Vyctor', 'Guimarães');
p2.andar();

// Criando objeto através de uma classe
class Pessoa3 {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  andar() {
    console.log(`${this.nome} ${this.sobrenome} está andando`);
  }
}
const p3 = new Pessoa3('Andy', 'Ryans');

p3.andar();