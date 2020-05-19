// Formas de criar array em JS

// Forma 1
var alunos = new Array("1", "2", "3", "4", "5");
console.log(alunos);

// Forma 2 [Recomendada]
var notas = [1, 3, 4, 5, 6, 8, 7, 5, 2];
console.log(notas);

// Acessando um índice de um vetor
console.log(notas[2]);

// Alterando um valor contido em um índice
notas[2] = 10;
console.log(notas[2]);

// Inserindo elementos no final do array
var nomes = ["Vyctor", "Vynícius"];
console.log(nomes);

nomes.push("Miguel");
nomes.push("Sueli");

// Tamanho do array
console.log(nomes.length);

// deletando dados de uma array
delete notas[0];

notas.pop();
notas.pop();
notas.pop();
notas.pop();

notas.splice(0, 1);

// splice adiciona elementos a partir de uma posição do array
notas.splice(0, 0, 1, 2);

notas.sort((a, b) => a - b);

// removendo o primeiro elemento de um array
notas.shift();

// inserindo elementos no início de um array
notas.unshift(1);
console.log(notas);

// matriz

// 4 x 4

var tabuleiro = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(tabuleiro[2][2]);
