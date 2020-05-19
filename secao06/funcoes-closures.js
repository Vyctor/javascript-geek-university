/**
 * Closure é o escopo da função
 */

let xuxa = "global";

function imprimir() {
  console.log(xuxa);
}

function outra() {
  let xuxa = "local";
  imprimir();
}

outra();
