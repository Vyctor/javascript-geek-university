console.log("");
console.log("===== Exercícios =====");

var cliente = {
  nome: "Vyctor",
  email: "vyctorguimaraes@gmail.com",
  telefone: "64992168274",
  rua: "Rua dos Ipês",
  numero: 666,
  bairro: "Jd. das Margaridas",
  cidade: "Rio Verde",
  uf: "GO",
};

function retonarObjetoFormatado({ nome, cidade, uf } = object) {
  console.log(`O(a) cliente ${nome} mora em ${cidade}, ${uf}.`);
}

retonarObjetoFormatado(cliente);

function intervaloImpares(a, b) {
  a % 2 !== 0 ? a++ : null;
  for (var i = a; i < b; i++) {
    i % 2 !== 0 ? console.log(i) : null;
  }
}

intervaloImpares(1, 11);

function experienciaFuncionario(anosDeExperiencia) {
  if (anosDeExperiencia <= 2) {
    console.log("Júnior");
  } else if (anosDeExperiencia <= 5) {
    console.log("Pleno");
  } else {
    console.log("Sênior");
  }
}

experienciaFuncionario(2);
experienciaFuncionario(5);
experienciaFuncionario(6);
