const curso = {
  nome: 'Programação em JS',
  horas: 27,
  preco: () => this.horas * 0.67,
}

const json = JSON.stringify(curso);

console.log(curso);

console.log(json);