// o filter seleciona elementos que passam pelo filtro especificado

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares = num.filter((x) => x % 2 === 0);

const filtrar_impares = (num) => num % 2 !== 0 && num <= 5;

let impares = num.filter(filtrar_impares);

console.log(pares);
console.log(impares);

var alunos = [
  { nome: "Pedro", nota: 8.5 },
  { nome: "João", nota: 3.5 },
  { nome: "Márcia", nota: 5.5 },
  { nome: "Tiago", nota: 10.0 },
  { nome: "Lúcia", nota: 9.0 },
];

var aprovados = alunos.filter((aluno) => aluno.nota >= 6);

console.log(aprovados);

console.log(aprovados.sort((alunoA, alunoB) => alunoA.nota - alunoB.nota));
