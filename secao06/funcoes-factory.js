/**
 * São funções que fabricam objetos
 */

function fabricarCurso(n, p) {
  const desconto = 0.9;
  return { nome: n, preco: (p * desconto).toFixed(2) };
}

console.log(fabricarCurso("Programação em JS", 27.99));
console.log(fabricarCurso("Criação de API's com Django Rest Framework", 35.99));
