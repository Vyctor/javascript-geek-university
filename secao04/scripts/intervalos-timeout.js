console.log("");
console.log("===== Intervalos e timeout =====");

function escrever() {
  console.log("Olá");
}

// Intervalo, executa repetidas vezes em determinado valor de tempo
setInterval(escrever, 10000);

// TimeOut, executa somente uma vez, após determinado valor de tempo
setTimeout(escrever, 0);
