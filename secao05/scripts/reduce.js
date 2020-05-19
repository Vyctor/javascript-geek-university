// reduz um conjunto de valores a um único valor

var precos = [4.66, 3.78, 9.78, 1.34, 5.32];

let soma = 0;

// precos.forEach((valor) => (soma += valor));

somar = (anterior, atual) => anterior + atual;

var ret = precos.reduce(somar);

console.log(ret);
