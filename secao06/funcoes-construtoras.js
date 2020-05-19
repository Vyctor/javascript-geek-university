// Criando uma função construtora

function Pessoa(n, s) {
  let altura;
  let peso;
  let idade;
  let nome;
  let sexo;

  this.raca = "Humano";

  let imprimirDados = function () {
    console.log(
      `Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}`
    );
  };

  this.fazerAniversario = function () {
    idade++;
    imprimirDados();
  };

  this.getIdade = function () {
    return idade;
  };
}
