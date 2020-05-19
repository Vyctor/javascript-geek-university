const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [, num1, num2, num3, num4, ...rest] = numeros;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(rest);

const Pessoa = {
  nome: "Vyctor",
  idade: 25,
  sexo: "M",
};

const { nome, idade } = Pessoa;

console.log(`${nome} tem ${idade} anos.`);
