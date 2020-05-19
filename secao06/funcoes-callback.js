const cursos = [
  "curso 1",
  "curso 2",
  "curso 3",
  "curso 4",
  "curso 5",
  "curso 6",
  "curso 7",
  "curso 8",
];

// usando lambda
cursos.forEach(function (curso, indice) {
  console.log(`${indice + 1} - ${curso}`);
});

// usando arrow
cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`));

const precos = [12, 40, 90, 110, 150, 30, 20, 50, 550];

const maiores = precos.filter((value) => value > 50);

console.log(maiores);
