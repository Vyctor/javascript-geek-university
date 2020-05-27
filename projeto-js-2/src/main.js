import api from './api';

class App {
  constructor() {
    // Lista de repositórios
    this.repositories = JSON.parse(localStorage.getItem('@repositories')) || [];

    // Form
    this.form = document.querySelector("form");

    // Lista
    this.list = document.querySelector(".list-group");

    // Método para registrar os eventos do form
    this.registerRepository();
    this.renderScreen();
  }

  async addRepository(event) {
    event.preventDefault();

    // Recuperar o valor do input
    let input = this.form.querySelector('input[id=repositorio]').value;

    if (input.length === 0) {
      return;
    }

    this.apresentarBuscando();

    try {
      let response = await api.get(`/repos/${input}`);

      const {
        name,
        description,
        html_url,
        owner: {
          avatar_url
        }
      } = (response.data);



      this.repositories.push({
        name,
        description,
        avatar_url,
        link: html_url
      });

      this.renderScreen();

      this.saveDataToStorage();

    } catch (err) {
      this.list.removeChild(document.querySelector('.list-group-item-warning'));

      let er = this.list.querySelector('.list-group-item-danger');
      if (er !== null) {
        this.list.removeChild(er);
      }

      let li = document.createElement('li');
      li.setAttribute('class', 'list-group-item list-group-item-danger');
      let txtError = document.createTextNode(`O repositório ${input} não existe`);
      li.appendChild(txtError);
      this.list.appendChild(li);
    }
  }

  apresentarBuscando() {
    let li = document.createElement('li');
    li.setAttribute('class', 'list-group-item list-group-item-warning');
    let txtBuscando = document.createTextNode(`Aguarde buscando o repositório...`);
    li.appendChild(txtBuscando);
    this.list.appendChild(li);
  }

  renderScreen() {

    this.list.innerHTML = "";

    this.repositories.forEach((repository) => {
      // criando <li>
      let itemList = document.createElement("li");
      itemList.setAttribute('class', 'list-group-item list-group-item-action');
      itemList.setAttribute('onclick', 'deleteRepository(this)');

      console.log(itemList)

      // criando <img>
      let img = document.createElement("img");
      img.setAttribute("src", repository.avatar_url);
      itemList.appendChild(img);

      // criando <strong>
      let strong = document.createElement("strong");
      let txtName = document.createTextNode(repository.name);
      strong.appendChild(txtName);
      itemList.appendChild(strong);

      // criando <p>
      let p = document.createElement("p");
      let txtDescription = document.createTextNode(repository.description);
      p.appendChild(txtDescription);
      itemList.appendChild(p);

      // criando <a></a>
      let a = document.createElement("a");
      a.setAttribute("target", "_blank");
      a.setAttribute("href", repository.link);
      let textAnchor = document.createTextNode("Acessar");
      a.appendChild(textAnchor);
      itemList.appendChild(a);

      // adicionar <li> como filho da ul
      this.list.appendChild(itemList);

      // limpar o conteúdo do input
      this.form.querySelector("input[id=repositorio]").value = '';

      // adiciona foco no inpuit
      this.form.querySelector("input[id=repositorio]").focus();
    });
  }

  saveDataToStorage() {
    localStorage.setItem('@repositories', JSON.stringify(this.repositories))
  }

  registerRepository() {
    this.form.onsubmit = (event) => {
      console.log(event);
      this.addRepository(event);
    };
  }

  deleteRepository(repository) {
    this.repositories.splice(this.repositories.indexOf(repository.name), 1);
    this.saveDataToStorage();
    this.renderScreen();
  }
}

new App();