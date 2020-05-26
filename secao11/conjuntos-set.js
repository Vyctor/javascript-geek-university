let cursos = new Set();

cursos.add('Programação para leigos');

cursos.add('Algoritmos e lógica de programação');

cursos.add('Programação em C').add('Programação em Java').add('Programação em Python');

cursos.add('Banco de dados').add('Programação Web com Django framework').add('Programação com Javascript');

console.log(cursos);

console.log(cursos.has('Programação em C'));

cursos.delete('Programação em C');

console.log(cursos);