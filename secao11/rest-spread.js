function total(...precos) {
  let total = 0;
  precos.forEach(preco => total += preco);

  return total;
}

console.log(total(23.55, 12.25, 14.13, 90.99, 70.98, 55.14, 10.22, 10.50, 55.32).toFixed(2));

let frutas1 = ['Manga', 'Uva', 'Melancia'];
let frutas2 = ['Acabate', 'Morango', 'Jaca']

let compras = [...frutas1, ...frutas2];

console.log(compras)

let alunos = ['Vyctor', 'Paula', 'Felipe', 'Fernanda'];
let novo = 'Joana';

let todos = [...alunos, novo];

console.log(todos);