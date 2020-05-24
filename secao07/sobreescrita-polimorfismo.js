class Pessoa {
  constructor(nome, sobrenome, idade) {
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._idade = idade;
  }

  get nome() {
    return this._nome;
  }

  set nome(nome) {
    this._nome = nome;
  }

  imprimirDados() {
    console.log(`${this._nome} ${this._sobrenome} ${this._idade}`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, sobrenome, idade, cargo, salario) {
    super(nome, sobrenome, idade);
    this._cargo = cargo;
    this._salario = salario;
  }

  get salario() {
    return this._salario;
  }

  set salario(salario) {
    this._salario = salario;
  }

  get cargo() {
    return this._cargo;
  }

  set cargo(cargo) {
    this._cargo = cargo;
  }

  imprimirDados() {
    super.imprimirDados();
    console.log(`${this._cargo} ${this.salario}`)
  }
}

const Vyctor = new Funcionario('Vyctor', 'Vieira Guimarães', 25, 'programador', 6000);

Vyctor.imprimirDados()