function somar() {
  let soma = 0;
  for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
}

function imprimeValores(num1, num2) {
  for (let i in arguments) {
    console.log(arguments[i]);
  }
}

imprimeValores();
imprimeValores(4, 6);
imprimeValores(4, 6, 8);
imprimeValores(4, 6, 8, 12, 16, 24);

// Gambiarra 1
function somar2(a, b, c) {
  a = a || 1;
  b = b || 2;
  c = c || 3;

  return a + b + c;
}

// Gambiarra 2

function somar3(a, b, c) {
  a = isNaN(a) ? 1 : num1;
  b = isNaN(b) ? 2 : num1;
  c = isNaN(c) ? 3 : num1;
}

// Forma correta de se utilizar um valor padrão

function somar4(a = 1, b = 2, c = 3) {
  return a + b + c;
}
