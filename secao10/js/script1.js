// Requisições AJAX

let btn = document.querySelector('#btn');
let input = document.querySelector('input[name=github_user]');
let div = document.querySelector('#app');

btn.onclick = () => {
  // limpar o conteúdo da div.
  div.innerHTML = '';

  // instanciando objeto AJAX
  let ajax = new XMLHttpRequest();

  // abrir uma conexão
  ajax.open('GET', `http://api.github.com/users/${input.value}`);

  // Enviar a requisição
  ajax.send(null);

  ajax.onreadystatechange = () => {
    // criar um elemento span
    let spanNome = document.createElement('span');

    // Criar variável nome
    let txtNome = '';

    if (ajax.readyState === 4) {
      if (ajax.status === 200) {
        // transformar json para array
        usuario = JSON.parse(ajax.responseText);

        if (usuario['name'] !== null) {
          txtNome = document.createTextNode(usuario['name']);

          let img = document.createElement('img');
          img.setAttribute('src', usuario['avatar_url']);
          img.setAttribute('alt', usuario['name']);
          img.setAttribute('width', '45px');
          img.setAttribute('height', '45px');

          div.appendChild(img);
        } else {
          txtNome = document.createTextNode(`O usuário ${input.value} não tem nome cadastrado.`)
        }
        spanNome.appendChild(txtNome);
        div.appendChild(spanNome);

        input.value = '';
      } else {
        txtNome = document.createTextNode('Usuário não encontrado!');
        spanNome.appendChild(txtNome);
        div.appendChild(spanNome);
        input.value = ''
      }
    }
  }

}