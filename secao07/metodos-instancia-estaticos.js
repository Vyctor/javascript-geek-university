class Carro {
  constructor(modelo) {
    this._marca = Carro.retornarMarca();
    this._modelo = modelo;
  }

  get marca() {
    return this._marca;
  }

  get modelo() {
    return this._modelo;
  }

  set modelo(modelo) {
    this._modelo = modelo;
  }

  imprimirDados() {
    console.log(`${this._marca} ${this.modelo}`)
  }

  static retornarMarca() {
    return 'Honda';
  }
}

console.log(Carro.retornarMarca());