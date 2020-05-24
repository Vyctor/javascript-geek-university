class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nome() {
    return this.nome;
  }

  set nome(nome) {
    this.nome = nome;
  }

  get sobrenome() {
    return this.sobrenome;
  }

  set sobrenome(sobrenome) {
    this.sobrenome = sobrenome;
    ß
  }


  falar = (msg) => console.log(`${this.nome} está falando ${msg}!`);

  comer = () => console.log(`${this.nome} está comendo...`);

  beber = () => console.log(`${this.nome} ${this.sobrenome} está bebendo...`);
}

class Carro {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  get marca() {
    return this.marca;
  }

  set marca(marca) {
    this.marca = marca;
  }

  get modelo() {
    return this.modelo;
  }

  set modelo(modelo) {
    this.modelo = modelo;
  }

  imprimir() {
    console.log(`${this.marca} ${this.modelo}`)
  }
}