// Exemplo 1
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;

const executar = somar;

console.log(executar(1, 2));

// Exemplo 2

const fazAlgo = (a, b, func) => func(a, b);

console.log(fazAlgo(4, 2, subtrair));

// Exemplo 3

const outra = (funcao) => funcao;

const ret = outra(somar);

console.log(ret(8, 6));
