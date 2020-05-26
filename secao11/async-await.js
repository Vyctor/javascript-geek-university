const newPromise = () => new Promise((resolve, reject) => {
  let valor = Math.floor(Math.random() * 10);

  setInterval(() => {
    valor % 2 ? resolve(`O valor ${valor} é par...`) : reject(`O valor: ${valor} é ímpar`);
  }, 2000)

});

execute = async () => {
  try {
    const response = await newPromise();
  } catch (err) {
    console.log(err);
  }
}

execute();