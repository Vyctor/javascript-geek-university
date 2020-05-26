let tasks = JSON.parse(localStorage.getItem('@tasks')) || [];
let input = document.querySelector('input[name=tarefa]');
let btn = document.getElementById('botao');
let list = document.querySelector('#lista');
let card = document.querySelector('.card');


btn.onclick = () => {
  let newTask = input.value;
  if (input.value !== '') {
    removeSpans();

    input.value = ''


    tasks.push(newTask);

    saveDataToStorage();

    renderTasks();
  } else {
    removeSpans();

    let span = document.createElement('span');
    span.setAttribute('class', 'alert alert-warning');

    let msg = document.createTextNode('Você precisa informa a tarefa');

    span.appendChild(msg);
    card.appendChild(span);
  }
}

function renderTasks() {
  list.innerHTML = '';

  tasks.forEach(task => {
    let itemList = document.createElement('li');
    itemList.setAttribute('class', 'list-group-item list-group-item-action');
    itemList.setAttribute('onclick', 'deleteTask(this)');



    let itemTexto = document.createTextNode(task);
    itemList.appendChild(itemTexto);

    list.appendChild(itemList);
  })
}

function removeSpans() {
  let spans = document.querySelectorAll('span');

  spans.forEach(span => {
    card.removeChild(span);
  });
}

function deleteTask(task) {
  tasks.splice(tasks.indexOf(task.textContent), 1);
  renderTasks();

  saveDataToStorage();

}

function saveDataToStorage() {
  localStorage.setItem('@tasks', JSON.stringify(tasks));
}

renderTasks();