function dividir(a, b) {
  if (a === 0 || b === 0) {
    throw "Os valores precisam ser positivos";
  } else {
    return a / b;
  }
}

try {
  let div = dividir(0, 2);
  console.log(div);
} catch (e) {
  console.log("Não foi possível dividir.", e);
} finally {
  console.log("vamos seguir...");
}
