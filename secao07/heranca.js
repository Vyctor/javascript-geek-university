class Funcao {
  constructor(descricao, salario) {
    this._descricao = descricao;
    this._salario = salario;
  }

  get descricao() {
    return this._descricao;
  }

  set descricao(descricao) {
    this._descricao = descricao;
  }

  get salario() {
    return this._salario;
  }

  set salario(salario) {
    this._salario = salario;
  }
}

class Pessoa {
  constructor(nome, sobrenome, email, cpf) {
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._email = email;
    this._cpf = cpf;
  }

  get nome() {
    return this._nome;
  }

  set nome(nome) {
    this._nome = nome;
  }

  get sobrenome() {
    return this._sobrenome;
  }

  set sobrenome(sobrenome) {
    this._sobrenome = sobrenome;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
  }

  get cpf() {
    return this._cpf;
  }

  set cpf(cpf) {
    this._cpf = cpf;
  }

  get nomeCompleto() {
    return `${this._nome} ${this._sobrenome}`
  }

  set nomeCompleto(nomeCompleto) {
    nomeCompleto = nomeCompleto.split(' ');

    this._nome = nomeCompleto.shift();
    this._sobrenome = nomeCompleto.join(' ');
  }
}


class Funcionario extends Pessoa {
  constructor(nome, sobrenome, email, cpf, funcao, registro) {
    super(nome, sobrenome, email, cpf);
    this._funcao = funcao;
    this._registro = registro;
  }

  get funcao() {
    return this._funcao;
  }

  set funcao(funcao) {
    this._funcao = funcao
  }

  get registro() {
    return this._registro;
  }

  set registro(registro) {
    this._registro = registro;
  }
}

class Cliente extends Pessoa {
  constructor(nome, sobrenome, email, cpf, renda) {
    super(nome, sobrenome, email, cpf);

    this._renda = renda;
  }

  get renda() {
    return this._renda;
  }

  set renda(renda) {
    this._renda = renda;
  }
}

const c1 = new Cliente('Vyctor', 'Vieira Guimarães', 'vyctor@gmail.com', '123.456.789.00', 6878.44)


const programador = new Funcao('Programador', 3000);
const suporte = new Funcao('Suporte', 2000);

const funcionario = new Funcionario('Pedro', 'Melo', 'pedro@gmail.com', '897.789.654-12', programador, '4e4e3');
const funcionario2 = new Funcionario('Pedro', 'Melo', 'pedro@gmail.com', '897.789.654-12', suporte, '3e169e');

console.log(funcionario)