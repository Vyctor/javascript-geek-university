let nome = 'Geek University'

for (let letra of nome) {
  console.log(letra);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
  console.log(numero * 2);
}

for (let index in numeros) {
  console.log(`Index: ${index}, Valor: ${numeros[index]} `)
}

let cursos = new Map([
  [1, 'Curso 1'],
  [2, 'Curso 2'],
  [3, 'Curso 3'],
  [4, 'Curso 4'],
  [5, 'Curso 5'],
  [6, 'Curso 6']
]);

for (let curso of cursos) {
  console.log(`${curso[0]} - ${curso[1]}`)
}

for (let curso of cursos) {
  console.log(curso)
}

for (let chave of cursos.keys()) {
  console.log(chave)
}

for (let valor of cursos.values()) {
  console.log(valor)
}

for (let [chave, curso] of cursos.entries()) {
  console.log(`${chave} - ${curso}`)
}

let conjunto = new Set([1, 2, 3, 4, 5, 5]);

for (let numero of numeros) {
  console.log(numero)
}