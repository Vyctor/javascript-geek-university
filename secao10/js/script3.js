// Entendendo  e utilizando Axios

let btn = document.querySelector('#btn');
let div = document.querySelector('#app');
let github_user = document.querySelector('input[name=github_user]');


btn.onclick = () => {
  div.innerHTML = '';

  let spanNome = document.createElement('span');

  let txtNome = '';


  axios.get(`https://api.github.com/users/${github_user.value}`)
    .then((response) => {
      const {
        name,
        avatar_url,
      } = response.data;

      if (name) {
        txtNome = document.createTextNode(name);

        let img = document.createElement('img');
        img.setAttribute('src', avatar_url);
        img.setAttribute('alt', name);
        img.setAttribute('width', '360px');
        img.setAttribute('height', '360px');

        div.appendChild(img);
      } else {
        document.createTextNode('O usuário não possui nome cadastrado.')
      }
      spanNome.appendChild(txtNome);
      div.appendChild(spanNome);

      github_user.value = '';

    })
    .catch((err) => {
      txtNome = document.createTextNode('Não foi possível realizar a requisição');
      spanNome.appendChild(txtNome);
      div.appendChild(spanNome);
      github_user.value = '';

    });
}