console.log("");
console.log("===== Condicionais =====");
var idade = 14;

// condicional aninhado
if (idade >= 18) {
  console.log("Maior de idade");
} else if (idade >= 14 && idade < 18) {
  console.log("Adolescente");
} else {
  console.log("Criança");
}

// Condicional utilizando operador ternário
// verifica conteúdo, faz casting
1 == "1" ? console.log("é igual") : console.log("não é igual");
// verifica conteúdo e tipo de dado
1 === "1" ? console.log("é igual") : console.log("não é igual");

// Switch case

var sexo = "m";

switch (sexo) {
  case "m":
    console.log("Masculino");
    break;
  case "f":
    console.log("feminino");
    break;
  default:
    console.log("Desconhecido");
    break;
}
