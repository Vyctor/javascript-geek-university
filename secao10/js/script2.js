// Entendendo e utilizando Promises
let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

let promise = () => {
  return new Promise((resolve, reject) => {
    let github_user = document.querySelector('input[name=github_user]').value;

    let ajax = new XMLHttpRequest();
    ajax.open('GET', `https://api.github.com/users/${github_user}`);
    ajax.send(null);

    ajax.onreadystatechange = () => {
      if (ajax.readyState === 4) {
        if (ajax.status === 200) {
          resolve(JSON.parse(ajax.responseText));
        } else {
          reject('Não foi encontrado nenhum usuário com este nome.')
        }
      }
    }
  });
}

btn.onclick = () => {
  div.innerHTML = '';

  let spanNome = document.createElement('span');

  let txtNome = '';

  promise()
    .then((response) => {
      if (response['name'] !== null) {
        txtNome = document.createTextNode(response['name']);

        let img = document.createElement('img');
        img.setAttribute('src', response['avatar_url']);
        img.setAttribute('alt', response['name']);
        img.setAttribute('width', '45px');
        img.setAttribute('height', '45px')

        div.appendChild(img);
      } else {
        txtNome = document.createTextNode('O usuário encontrado não possui nome');
      }
      spanNome.appendChild(txtNome);
      div.appendChild(spanNome);
      document.querySelector('input[name=github_user]').value = '';
    })
    .catch(error => {
      txtNome = document.createTextNode(error);
      spanNome.appendChild(txtNome);
      div.appendChild(spanNome);
    })
}