var cursos = [
  "Programação para leigos",
  "Algoritmos e lógica de programação",
  "Programação em C",
  "Programação em Java",
  "Programação em Python",
  "Programação Web com Django Framework",
  "Banco de dados",
];

console.log(cursos);
console.log(`Quantidade de cursos: ${cursos.length}`);

const imprimir = (curso, indice) => console.log(`${indice + 1} - ${curso}`);

cursos.forEach(imprimir);
console.log("\n\n");

// utilização de uma
cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`));

cursos.forEach((curso, indice) => console.log(curso.toLowerCase()));
