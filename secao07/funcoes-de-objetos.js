const curso = {
  nome: 'Programação em JS',
  horas: 25,
  preco: 27.99
}

console.log(curso);

Object.entries(curso).forEach(([key, value]) => {
  console.log(`${key} : ${value}`)
});

Object.defineProperty(curso, 'publicacao', {
  enumerable: true,
  writable: false,
  value: '07/12/2019'
});

console.log(curso);


Object.freeze(curso);


const usuarios = [{
  nome: 'Aline Moraes',
  empresa: 'Geek University'
}, {
  nome: 'Ricardo Brandao',
  empresa: 'Google'
}, {
  nome: 'Felipe Xavier',
  empresa: 'Sony'
}]

console.table(usuarios)