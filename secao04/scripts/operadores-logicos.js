console.log("");
console.log("===== Operadores lógicos =====");

var curso = "javascript";
var legal = false;

// Operador AND | E
// Todas as condições devem ser verdadeiras para obter
// resultado verdadeiro, uma false e o resultado falhará
if (curso === "javascript" && legal === true) {
  console.log("O curso de javascript é legal");
} else {
  console.log("O curso não é de javascript ou não é legal");
}

// Operador OR | OU
// Para obter true ao menos uma das condições deve ser verdadeira
if (curso === "javascript" || legal === true) {
  console.log("O curso de javascript é legal");
} else {
  console.log("O curso não é de javascript ou não é legal");
}

// Operador NOT | !
// quando queremos fazer uma negação ou verificar se algo não é como esperado
if (curso !== "javascript") {
  console.log("O curso não é de javascript");
} else {
  console.log("O curso é de javascript");
}
