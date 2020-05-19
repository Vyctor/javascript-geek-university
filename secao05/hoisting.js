/**
 *  Hoisting é um comportamento da linguagem javascript.
 *  Ele puxa a declaração da varíavel para o início do código, sem inicializá-la.
 *  Ocorre somente ao utilizar var. Com let e const não existe
 */
console.log(nome);

// Declarando e inicializando a variável
var nome = "Vyctor";

console.log(nome);
