console.log("");
console.log("===== Escopo de variáveis =====");

function somar(a, b) {
  // variável local, só é reconhecida dentro do bloco da função
  var resultado = a + b;
  return resultado;
}

for (var i = 0; i < 10; i++) {
  // variável dentro de um for é uma variável global
  var outra = 5;
  console.log(i + outra);
}

console.log(somar(1, 3));

for (var i = 0; i < 10; i++) {
  // variável declarada com let é uma variável local, só funciona no escopo em que foi declarada
  let outra = 5;
  console.log(i + outra);
}
