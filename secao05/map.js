// o map é utilizado para realizar transformações em um array
// ele irá mapear o array realizar as transformações e retornar um array modificado

var valores = [2, 4, 6, 8, 10];

var dobro = valores.map((valor) => valor * 2);

console.log(dobro);

// Encadeando maps

const dobrar = (valor) => valor * 2;
const soma_4 = (valor) => valor + 4;
const dividir_por_2 = (valor) => valor / 5;

var resultado = valores.map(dobrar).map(soma_4).map(dividir_por_2);

console.log(resultado);
